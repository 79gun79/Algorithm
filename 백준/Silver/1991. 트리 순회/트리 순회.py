import sys
input = sys.stdin.readline

class Node:
    def __init__(self, root, left, right):
        self.root = root
        self.left = left
        self.right = right
tr = {}
def preorder(node):
    print(node.root, end="")
    if node.left != '.':
        preorder(tr[node.left])
    if node.right != '.':
        preorder(tr[node.right])

def inorder(node):
    if node.left != '.':
        inorder(tr[node.left])
    print(node.root, end="")
    if node.right != '.':
        inorder(tr[node.right])

def postorder(node):
    if node.left != '.':
        postorder(tr[node.left])
    if node.right != '.':
        postorder(tr[node.right])
    print(node.root, end="")



n = int(input())
for _ in range(n):
    i, j, k = input().split()
    tr[i] = Node(i, j, k)

preorder(tr['A'])
print()
inorder(tr['A'])
print()
postorder(tr['A'])
