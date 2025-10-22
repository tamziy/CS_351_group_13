class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
        self._count = 0

    def getFromFile(self, filename):
        try:
            with open(filename, "r") as f:
                for line in f:
                    token = line.strip().upper()
                    if token:
                        self.insert(token)
            return True
        except:
            return False


    def insert(self, word):
        if not word:
            return False
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        if node.is_word:
            return False
        node.is_word = True
        self._count += 1
        return True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_word

    def remove(self, word):
        if not word:
            return False
        node = self.root
        path = []
        for ch in word:
            if ch not in node.children:
                return False
            path.append(node)
            node = node.children[ch]
        if not node.is_word:
            return False
        node.is_word = False
        self._count -= 1
        return True

    def clear(self):
        self.root = TrieNode()
        self._count = 0
        return True

    def wordCount(self):
        return self._count

    def words(self):
        out = []
        def dfs(node, prefix):
            if node.is_word:
                out.append(prefix)
            for ch in sorted(node.children):
                dfs(node.children[ch], prefix + ch)
        dfs(self.root, "")
        return out

    def starts_with(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return []
            node = node.children[ch]
        results = []
        self._dfs(node, prefix, results)
        return results

    def _dfs(self, node, prefix, results):
        if node.is_word:
            results.append(prefix)
        for ch in sorted(node.children):
            self._dfs(node.children[ch], prefix + ch, results)
