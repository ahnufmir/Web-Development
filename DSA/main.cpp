#include <iostream>
#include <filesystem>
#include <fstream>
#include "src/directoryScanning.h"
#include "src/FileState.h"
#include "src/CommitChaining.h"
using namespace std;
namespace fs = std::filesystem;

bool gitInitFn()
{
    bool minigit = fs::create_directory("ProjectToTrack/.minigit");
    bool blobs = fs::create_directory("ProjectToTrack/.minigit/blobs");
    bool commits = fs::create_directory("ProjectToTrack/.minigit/commits");
    ofstream headfile("ProjectToTrack/.minigit/HEAD.txt");
    ofstream indexfile("ProjectToTrack/.minigit/index.txt");
    if (!blobs || !commits)
    {
        cout << "One of the directory is not created properly. minigit is not initiliazed" << endl;
        return false;
    }
    if (!headfile.is_open() || !indexfile.is_open())
    {
        cout << "Head of Index File is not opening" << endl;
        return false;
    }
    // what to initilize in HEAD and index file??
    headfile << "-1";
    headfile.close();
    return true;
}

int main()
{
    string gitInit = "git init";
    string gitStatus = "git status";
    string gitCommit = "git commit";
    string gitPush = "git push";
    FileState fs;
    directoryScanning d(&fs);
    CommitChaining c(&fs);
    bool check = false;

    while (true)
    {
        cout << endl
             << "MiniGit> ";
        string s;
        getline(cin, s);
        cout << endl;
        if (s == gitInit)
        {
            if (fs::is_directory("ProjectToTrack/.minigit"))
            {
                cout << ".minigit is already Initiliazed :)" << endl;
            }
            else
            {
                if (gitInitFn())
                {
                    cout << "minigit is initliazed." << endl;
                    check = true;
                }
            }
        }
        else if (s == gitStatus)
        {
            if (!fs::is_directory("ProjectToTrack/.minigit"))
            {
                cout << "Git is not initiliazed" << endl;
                continue;
            }

            fs.clearCurrentFiles();
            fs.clearChangedFiles();
            // fs.clearStoreFiles();
            d.scanDirectory();
            d.processFile();
            fs.checkStatus();
        }
        else if (s == gitCommit)
        {
             if (!fs::is_directory("ProjectToTrack/.minigit"))
            {
                cout << "Git is not initiliazed" << endl;
                continue;
            }

            c.commit();
            fs.changeBlob();
            fs.clearCurrentFiles();
            fs.clearStoreFiles();
        }
        else
        {
            cout << "Incorrect Command" << endl;
        }
    }
}
