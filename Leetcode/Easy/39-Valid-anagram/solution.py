#Using Python's Set
def isAnagram(self, s: str, t: str) -> bool:
    if set(s) != set(t):
        return False
    for i in s:
        if s.count(i) != t.count(i):
            return False
    return True

#Hashmap
def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    countS,countT = {},{}
    for i in range(len(s)):
        countS[s[i]] = countS.get([s[i]],0) + 1
        countT[t[i]] = countT.get([t[i]],0) + 1
    for a in countS:
        if countS[a] != countT[a]:
            return False
    return True
 
#The Easiest Way - Not recommended :)
def isAnagram(self, s: str, t: str) -> bool:
    return Counter(s) == Counter(t)
        

