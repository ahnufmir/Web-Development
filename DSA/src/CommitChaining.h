#pragma once

#include "../Headers/SinglyLinkedList.h"
#include "../Headers/MyArray.h"
#include "FileState.h"
#include <iostream>
#include <fstream>

using namespace std;

class CommitChaining
{
    struct Commit
    {
        int parentID;
        int commitID;
        MyArray<FileState::File> file;
    };
    LinkedList<Commit> commitHistory;
    FileState *f;

public:
    CommitChaining(FileState *fs);
    void commit();
};