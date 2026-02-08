#include "directoryScanning.h"
#include <filesystem>
namespace fs = std::filesystem;

directoryScanning::directoryScanning(FileState *file)
{
    this->f = file;
}

void directoryScanning::scanDirectory()
{
    directory = Tree<string>(); 
    string root = "ProjectToTrack";
    for (auto &it : fs::recursive_directory_iterator("ProjectToTrack"))
    {
        string node = it.path().relative_path();
        string parentNode = it.path().parent_path().relative_path();
        directory.insertNode(parentNode, node);
    }
}

void directoryScanning::processFile()
{
    traverseHelper(directory.getRoot(), f);
}

void directoryScanning::traverseHelper(TreeNode<string> *node, FileState *fsObj)
{
    if (!node)
        return;

    string path = node->getData();

     // ignore .minigit completely
    if (path.find(".minigit") != string::npos)
        return;

    // ONLY hash real files
    if (fs::is_regular_file(path))
    {
        fsObj->hashFile(path);
    }

    for (int i = 0; i < node->getChildrenCount(); i++)
    {
        traverseHelper(node->getChild(i), fsObj);
    }
}

void directoryScanning::printDirectory()
{
    directory.print_pre0rder();
}

// Tree<string>* directoryScanning::getTree() const{
//     return &directory;
// }