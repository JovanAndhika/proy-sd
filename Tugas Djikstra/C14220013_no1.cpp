#include <iostream>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

class Graph
{
    int **matrix;
    int size;

public:
    Graph(int vertices)
    {
        this->size = vertices;
        matrix = new int *[vertices];

        for (int i = 0; i < vertices; i++)
        {
            matrix[i] = new int[vertices];
        }

        // inisialisasi 0
        for (int i = 0; i < vertices; i++)
        {
            for (int j = 0; j < vertices; j++)
            {
                matrix[i][j] = 0;
            }
        }
    }

    // default parameter weight = 1
    void AddEdge(int start, int end, int weight = 1)
    {
        matrix[start][end] = weight;

        // untuk undirected graph
        matrix[end][start] = weight;
    }

    void BFS(int start)
    {
        vector<bool> visited(size, false);
        queue<int> q;

        visited[start] = true;
        q.push(start);
        cout << "start dari " << start << endl;

        while (!q.empty())
        {
            int kotaSekarang = q.front();
            q.pop();

            cout << kotaSekarang << " -> ";

            for (int i = 0; i < size; i++)
            {
                if (!visited[i] && matrix[kotaSekarang][i] > 0)
                {
                    q.push(i);
                    visited[i] = true;
                }
            }
        }
    }

    
    void printGraph()
    {
        for (int i = 0; i < this->size; i++)
        {
            for (int j = 0; j < this->size; j++)
            {
                cout << matrix[i][j] << " ";
            }
            cout << endl;
        }
    }

    // count province
    void countProvince()
    {
        int counter = 0;
        vector<bool> visited(size, false);
        queue<int> q;

        visited[0] = true;
        q.push(0);

        while (!q.empty())
        {
            int kotaSekarang = q.front();
            q.pop();

            cout << kotaSekarang << " -> ";

            for (int i = 0; i < size; i++)
            {
                if (visited[i] == false && matrix[kotaSekarang][i] > 0)
                {
                    q.push(i);
                    visited[i] = true;
                    counter++;
                }
            }
        }

        cout << "output: " << counter;
    }

};

int main(int argc, char const *argv[])
{
    // inisialisasi graph sesuai dengan jumlah node/vertice
    // Graph g(7);
    // g.AddEdge(0,1);
    // g.AddEdge(0,3);
    // g.AddEdge(1,2);
    // g.AddEdge(1, 3);
    // g.AddEdge(1, 5);
    // g.AddEdge(1, 6);
    // g.AddEdge(2, 5);
    // g.AddEdge(2, 4);
    // g.AddEdge(2, 3);
    // g.AddEdge(3, 4);

    Graph g(5);
    g.AddEdge(0, 4);
    g.AddEdge(1, 2);
    g.AddEdge(2, 3);
    g.printGraph();
    cout << endl;

    g.countProvince();

    return 0;
}