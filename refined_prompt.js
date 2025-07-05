/**
 * Converts a string to dot.case.
 *
 * Handles various delimiters (space, hyphen, underscore, dot, slash), consecutive delimiters,
 * numbers, alphanumeric strings, leading/trailing delimiters, empty/whitespace strings,
 * already dot.cased strings, special characters, and unicode.
 *
 * @param {string | null | undefined} input - The string to convert to dot.case. Accepts strings, null, or undefined.
 * @returns {string} The dot.cased string. Returns an empty string for null, undefined, or empty/whitespace-only input.
 * @throws {TypeError} If input is not a string, null, or undefined.
 *
 * @example
 * toDotCase('hello world'); // 'hello.world'
 * toDotCase('user_id_number'); // 'user.id.number'
 * toDotCase('API-response-data'); // 'api.response.data'
 * toDotCase('__test__case__'); // 'test.case'
 * toDotCase('file.name.extension'); // 'file.name.extension'
 * toDotCase('path/to/file'); // 'path.to.file'
 * toDotCase('123abc'); // '123abc'
 * toDotCase('XMLHttpRequest'); // 'xml.http.request'
 * toDotCase('   spaced   '); // 'spaced'
 * toDotCase('café-münü'); // 'café.münü'
 */

/**
 * Converts a string to camelCase.
 *
 * Handles various delimiters (space, hyphen, underscore, dot, slash), consecutive delimiters,
 * numbers, alphanumeric strings, leading/trailing delimiters, empty/whitespace strings,
 * already camelCased strings, special characters, and unicode.
 *
 * @param {string | null | undefined} input - The string to convert to camelCase. Accepts strings, null, or undefined.
 * @returns {string} The camelCased string. Returns an empty string for null, undefined, or empty/whitespace-only input.
 * @throws {TypeError} If input is not a string, null, or undefined.
 *
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * toCamelCase('user_id_number'); // 'userIdNumber'
 * toCamelCase('API-response-data'); // 'apiResponseData'
 * toCamelCase('__test__case__'); // 'testCase'
 * toCamelCase('file.name.extension'); // 'fileNameExtension'
 * toCamelCase('path/to/file'); // 'pathToFile'
 * toCamelCase('123abc'); // '123abc'
 * toCamelCase('XMLHttpRequest'); // 'xmlHttpRequest'
 * toCamelCase('   spaced   '); // 'spaced'
 * toCamelCase('café-münü'); // 'caféMünü'
 */

    // Lowercase the first word, preserve unicode, numbers, etc.
    const firstWord = words[0].toLocaleLowerCase();

    // Capitalize the first letter of subsequent words, preserve the rest
    const rest = words
        .slice(1)
        .map(word =>
            word.charAt(0).toLocaleUpperCase() + word.slice(1)
        );

    return [firstWord, ...rest].join('');
}

// TypeScript type definition
// export function toCamelCase(input: string | null | undefined): string;

module.exports = { toCamelCase };
