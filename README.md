# Slice Javascript action

The `slice` method extracts parts of a string and returns the extracted parts in a new string.

Use the start and end parameters to specify the part of the string you want to extract.

The first character has the position 0, the second has position 1, and so on.

**Tip:** Use a negative number to select from the end of the string.

## Inputs

### `value`

**Required** What to substring.

### `start`

**Required** The position where to begin the extraction. First character is at position 0.

### `end`

The position (up to, but not including) where to end the extraction. If omitted, selects all characters from the start-position to the end of the string.

## Outputs

### `result`

A String, representing the extracted part of the string.

## Example usage

```yaml
uses: web3j/slice-action@v1.1
with:
  value: 'Mona the Octocat'
  start: '9'
```

Result: `Octocat`

