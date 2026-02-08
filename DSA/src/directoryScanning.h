#pragma once

#include "../Headers/Trees.h"
#include "FileState.h"

class directoryScanning
{
private:
    Tree<string> directory;
    FileState *f;
public:
    directoryScanning(){};
    directoryScanning(FileState *f);
    void scanDirectory();
    void printDirectory();
    const Tree<string>* getTree();
    void processFile();
    void traverseHelper(TreeNode<string>* node, FileState* fs);
    ~directoryScanning(){};
};
