def vowel_count(text):
    lower_text = text.lower()
    return {letter: lower_text.count(letter) for letter in lower_text if letter in "aeiou" }

vowel_count("random text right here")