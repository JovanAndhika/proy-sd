#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Vertex
{
    int weight;
    int tujuan;
};

class Graph
{
    int size;
    vector<vector<Vertex>> adjList;

public:
    Graph(int vertices)
    {
        this->size = vertices;

        // tambah vertexnya
        for (int i = 0; i < vertices; i++)
        {
            vector<Vertex> v;
            adjList.push_back(v);
        }
    }

    void AddEdge(int start, int end, int weight)
    {
        Vertex node;
        node.tujuan = end;
        node.weight = weight;

        adjList[start].push_back(node);
    }

    void printGraph()
    {
        for (int i = 0; i < size; i++)
        {
            cout << "vertex ke -" << i << ": ";
            for (int j = 0; j < adjList[i].size(); j++)
            {
                cout << "(" << adjList[i][j].tujuan << ", " << adjList[i][j].weight << ")"
                     << " ";
            }
            cout << endl;
        }
    }

    void shortestPath(int start, int end)
    {
        vector<bool> visited(size, false);
        queue<int> q;

        visited[start] = true;
        q.push(start);

        cout << "BFS dari kota " << start << endl;
        cout << "shortest path : ";
        int holder;
        int holderj;
        int counter = 0;

        while (!q.empty())
        {
            int kotaSekarang = q.front();
            q.pop();



                for (int j = 0; j < adjList[kotaSekarang].size() - 1; j++)
                {
                    if (!visited[kotaSekarang] && adjList[kotaSekarang][j].weight > adjList[kotaSekarang][j + 1].weight)
                    {
                        holder = adjList[kotaSekarang][j].tujuan;
                        holderj = j;
                        q.push(j);
                        visited[j] = true;
                    }
                }
                cout << holder << " ";
                counter += adjList[kotaSekarang][holderj].weight;
        }

        cout << "distance:" << counter;
    }
};

int main(int argc, char const *argv[])
{
    Graph graph(5);
    graph.AddEdge(0, 1, 10);
    graph.AddEdge(1, 2, 10);
    graph.AddEdge(2, 3, 10);
    graph.AddEdge(3, 0, 40);
    graph.shortestPath(0, 3);

    return 0;
}
