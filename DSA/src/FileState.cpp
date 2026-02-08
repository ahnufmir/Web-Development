#include "FileState.h"

FileState::FileState() {}

void FileState::clearCurrentFiles()
{
    currentFiles.clear();
}
void FileState::clearChangedFiles()
{
    changedFiles.clear();
}

void FileState::clearStoreFiles()
{
    storedFiles.clear();
}

void FileState::hashFile(string path)
{
    // string hash_hex_str;
    // picosha2::hash256_hex_string(path, hash_hex_str);
    ifstream file(path);
    if (!file.is_open())
        return;

    string content(
        (istreambuf_iterator<char>(file)),
        istreambuf_iterator<char>());

    string hash_hex_str;
    picosha2::hash256_hex_string(content, hash_hex_str);
    File f;
    f.path = path;
    f.hash = hash_hex_str;
    currentFiles.append(f);
    // cout << "File path : " << f.path << endl;
    // cout << "File Hash : " << f.hash << endl;
}

void FileState::checkStatus()
{
    ifstream file("ProjectToTrack/.minigit/index.txt");
    if (!file.is_open())
    {
        cout << "File not opened" << endl;
        return;
    }
    File f;
    storedFiles.clear();
    string line;
    while (getline(file, line))
    {
        string path = "";
        string hash = "";
        bool spaceFound = false;

        for (char ch : line)
        {
            if (ch == ' ')
            {
                spaceFound = true;
                continue; // skip the space itself
            }

            if (!spaceFound)
            {
                path += ch; // before space → path
            }
            else
            {
                hash += ch; // after space → hash
            }
        }
        if (path != "" && hash != "")
        {
            f.path = path;
            f.hash = hash;
            storedFiles.append(f);
        }
        else
        {
            // cout << "either path or hash is empty" << endl;
        }
    }

    if (storedFiles.getSize() == 0 && currentFiles.getSize() == 0)
    {
        return;
    }
    for (int i = 0; i < currentFiles.getSize(); i++) // checking for either modified/new file
    {
        bool check = false;
        for (int j = 0; j < storedFiles.getSize(); j++)
        {
            if (currentFiles[i].path == storedFiles[j].path)
            {
                check = true;                                    // checking if file is already present or not
                if (currentFiles[i].hash != storedFiles[j].hash) // check that if file content changed or not
                {
                    changedFiles.append(currentFiles[i]);
                    cout << currentFiles[i].path << " is modified" << endl;
                    break;
                }
            }
        }
        if (!check)
        {
            changedFiles.append(currentFiles[i]);
            cout << currentFiles[i].path << " is added" << endl;
        }
    }

    for (int i = 0; i < storedFiles.getSize(); i++) // checking for deleted file(s)
    {
        bool check = false;
        for (int j = 0; j < currentFiles.getSize(); j++)
        {
            if (currentFiles[j].path == storedFiles[i].path)
            {
                check = true; // checking if file is already present or not
                break;
            }
        }
        if (!check)
        {
            changedFiles.append(storedFiles[i]);
            cout << storedFiles[i].path << " is deleted" << endl;
        }
    }
}

// MyArray<FileState::File>& FileState::getCurrentFiles() const
// {
//     return currentFiles;
// }

const MyArray<FileState::File> &FileState::getCurrentFiles() const
{
    return changedFiles;
}

void FileState::changeBlob()
{

    if (storedFiles.getSize() == 0 && currentFiles.getSize() == 0)
    {
        return;
    }
    for (int i = 0; i < currentFiles.getSize(); i++) // checking for either modified/new file
    {
        bool check = false;
        for (int j = 0; j < storedFiles.getSize(); j++)
        {
            if (currentFiles[i].path == storedFiles[j].path)
            {
                check = true;                                    // checking if file is already present or not
                if (currentFiles[i].hash != storedFiles[j].hash) // check that if file content changed or not
                {
                    // cout << currentFiles[i].path << " is modified" << endl;
                    string file = currentFiles[i].hash + ".txt";
                    string path = "ProjectToTrack/.minigit/blobs/" + file;
                    string readFile = currentFiles[i].path;
                    if (fs::exists(path))
                    {
                        continue;;
                    }
                    ifstream readingFile(currentFiles[i].path, ios::binary);
                    ofstream writingFile(path, ios::binary);
                    writingFile << readingFile.rdbuf();
                    writingFile.close();
                    readingFile.close();
                    break;
                }
            }
        }
        if (!check)
        {
            // cout << currentFiles[i].path << " is added" << endl;
            string file = currentFiles[i].hash + ".txt";
            string path = "ProjectToTrack/.minigit/blobs/" + file;
            string readFile = currentFiles[i].path;
            if (fs::exists(path))
            {
                continue;
            }
            ifstream readingFile(currentFiles[i].path, ios::binary);
            ofstream writingFile(path, ios::binary);
            writingFile << readingFile.rdbuf();
            writingFile.close();
            readingFile.close();
        }
    }
}