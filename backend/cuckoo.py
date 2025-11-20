import json

class CuckooHashTable:
    def __init__(self, size=11):
        self.size = size
        self.table1 = [None] * size
        self.table2 = [None] * size

    def hash1(self, key):
        return abs(hash(key)) % self.size

    def hash2(self, key):
        return (abs(hash(key)) // self.size) % self.size

    def lookup(self, key):
        size = self.size

        pos1 = self.hash1(key)
        if self.table1[pos1] is not None and self.table1[pos1][0] == key:
            return True

        pos2 = self.hash2(key)
        if self.table2[pos2] is not None and self.table2[pos2][0] == key:
            return True

        return False

    def rehash(self):
        print("Rehashing... increasing table size.")

        new_size = self.size * 2 + 1
        new_table1 = [None] * new_size
        new_table2 = [None] * new_size

        all_entries = self.table1 + self.table2

        self.size = new_size
        self.table1 = new_table1
        self.table2 = new_table2

        for entry in all_entries:
            if entry is not None:
                key, value = entry
                self.insert(key, value)

    def insert(self, key, value, max_loop=10):
        if self.lookup(key):
            print(f"Key {key} already exists.")
            return

        for _ in range(max_loop):
            pos1 = self.hash1(key)

            if self.table1[pos1] is None:
                self.table1[pos1] = (key, value)
                return

            evicted_key, evicted_value = self.table1[pos1]
            self.table1[pos1] = (key, value)
            key, value = evicted_key, evicted_value

            pos2 = self.hash2(key)

            if self.table2[pos2] is None:
                self.table2[pos2] = (key, value)
                return

            evicted_key, evicted_value = self.table2[pos2]
            self.table2[pos2] = (key, value)
            key, value = evicted_key, evicted_value

        self.rehash()
        self.insert(key, value)

    def search(self, key):
        size = self.size

        pos1 = self.hash1(key)
        if self.table1[pos1] is not None and self.table1[pos1][0] == key:
            return self.table1[pos1][1]

        pos2 = self.hash2(key)
        if self.table2[pos2] is not None and self.table2[pos2][0] == key:
            return self.table2[pos2][1]

        return None

    def load_json(self, filename):
        with open(filename, "r", encoding="utf-8") as file:
            data = json.load(file)  # data is already a list of dicts

            for row in data:
                key = f"CS {row['courseNo']}"
                value = row
                self.insert(key, value)
