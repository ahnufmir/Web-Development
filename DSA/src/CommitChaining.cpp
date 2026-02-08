#include "CommitChaining.h"

CommitChaining::CommitChaining(FileState *fs)
{
    f = fs;
}

void CommitChaining ::commit()
{
    Commit c;
    ifstream filee("ProjectToTrack/.minigit/HEAD.txt");
    int id;
    filee >> id;

    c.parentID = id;
    c.commitID = id + 1;
    c.file = f->getCurrentFiles();
    ofstream myFile("ProjectToTrack/.minigit/HEAD.txt");
    myFile << c.commitID;
    myFile.close();

    commitHistory.append(c);
    string fileName = to_string(c.commitID) + ".txt";
    string path = "ProjectToTrack/.minigit/commits/" + fileName;
    ofstream commitFile(path);
    if (!commitFile.is_open())
    {
        cout << "Commit File Not Opened" << endl;
        return;
    }
    commitFile << "Parent : " << c.parentID << endl;
    commitFile << "Commit ID: " << c.commitID << endl;
    commitFile << "Files : " << c.file << endl;
    commitFile.close();

    ofstream indexFile("ProjectToTrack/.minigit/index.txt");
    // while (!indexFile.eof())
    // {
    //     string line;
    //     getline(indexFile, line);
    //     string path = "";
    //     string hash = "";
    //     bool spaceFound = false;

    //     for (char ch : line)
    //     {
    //         if (ch == ' ')
    //         {
    //             spaceFound = true;
    //             continue; // skip the space itself
    //         }

    //         if (!spaceFound)                                     // I was modifiying index.txt file earlier but now i will produce new txt file each time
    //         {
    //             path += ch; // before space → path
    //         }
    //         else
    //         {
    //             hash += ch; // after space → hash
    //         }
    //     }
    //     for (int i = 0; i < c.file.getSize(); i++)
    //     {
    //         if (path == c.file[i].path)
    //         {
    //            index
    //         }
    //     }

    //     else
    //     {
    //        // cout << "either path or hash is empty" << endl;
    //     }
    // }
    for (int i = 0; i < c.file.getSize(); i++)
    {
        indexFile << c.file[i].path << " " << c.file[i].hash << endl;
    }
    // f->clearCurrentFiles();
    // f->clearStoreFiles();
}