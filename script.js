function reverse{
    const str = "Geeks for Geeks";
    const reversedString = str.split("").reduce((acc, char) => char + acc, "");
}
