#Write a function that accepts a string and returns a dictionary with the keys as the vowels and values as the count of times that vowel appears in the string.

def vowel_count(text):
    lower_text = text.lower()
    return {letter: lower_text.count(letter) for letter in lower_text if letter in "aeiou" }

vowel_count("random text right here")