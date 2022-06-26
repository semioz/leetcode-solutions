#Write a function which accepts a string and returns a new string with all the characters reversed.

def reverse_string(word):
    return word[::-1]
        
text = reverse_string("this is a random text.")

print(text)
