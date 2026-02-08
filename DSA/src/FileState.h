#pragma once

#include "../Headers/MyArray.h"
#include "../Headers/picosha2.h"
#include <fstream>
namespace fs = std::filesystem;

class FileState
{
public:
    struct File
    {
        string path;
        string hash;
    };

private:
    MyArray<File> currentFiles;
    MyArray<File> storedFiles;
    MyArray<File> changedFiles;

public:
    File f; // what about this?
    FileState();
    void hashFile(string path);
    void checkStatus();
    void clearCurrentFiles();
    void clearStoreFiles();
    void clearChangedFiles();
    void changeBlob();
    const MyArray<File> &getCurrentFiles() const;
    //~FileState();
};

inline ostream &operator<<(ostream &out, const FileState::File &f)
{
    out << f.path << " " << f.hash;
    return out;
}
