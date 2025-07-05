/**
 * Chain Prompt for Creating a Robust toKebabCase Function
 * 
 * This is a three-step chain prompt that progressively builds a comprehensive
 * JavaScript function to convert strings to kebab-case format.
 */

// =============================================================================
// STEP 1: Basic Function Structure and Core Logic
// =============================================================================

const STEP_1_PROMPT = `
Create a JavaScript function called \`toKebabCase\` that converts strings to kebab-case format. The function should:

1. Take a string input and convert it to lowercase
2. Replace common delimiters (spaces, underscores, dots, slashes) with hyphens
3. Handle camelCase by inserting hyphens before uppercase letters
4. Remove consecutive delimiters and leading/trailing delimiters

Basic requirements:
- Convert 'hello world' to 'hello-world'
- Convert 'firstName' to 'first-name' 
- Convert 'user_id' to 'user-id'
- Convert 'API.Response' to 'api-response'

Start with a simple implementation that handles these core cases. Don't worry about error handling or edge cases yet - just focus on the main conversion logic.
`;

// =============================================================================
// STEP 2: Add Comprehensive Error Handling and Edge Cases
// =============================================================================

const STEP_2_PROMPT = `
Now enhance the \`toKebabCase\` function from Step 1 by adding robust error handling and support for edge cases:

1. **Input validation**: Handle null, undefined, and non-string inputs
2. **Edge cases**: 
   - Empty strings and whitespace-only strings
   - Strings with consecutive delimiters ('hello__world', 'test--case')
   - Strings starting/ending with delimiters ('_test_', '-name-')
   - Numbers and alphanumeric strings ('123abc', 'version2')
   - Already kebab-cased strings ('existing-kebab-case')
   - Unicode characters ('café-münü')

3. **Error handling**:
   - Return empty string for null/undefined
   - Throw TypeError for invalid input types
   - Handle malformed input gracefully

Test cases to support:
- \`toKebabCase('')\` → \`''\`
- \`toKebabCase(null)\` → \`''\`
- \`toKebabCase('__test__case__')\` → \`'test-case'\`
- \`toKebabCase('XMLHttpRequest')\` → \`'xml-http-request'\`
- \`toKebabCase('café-münü')\` → \`'café-münü'\`

Build upon the existing function structure from Step 1.
`;

// =============================================================================
// STEP 3: Add Documentation, TypeScript Support, and Performance Optimization
// =============================================================================

const STEP_3_PROMPT = `
Finalize the \`toKebabCase\` function by adding professional documentation and optimizations:

1. **JSDoc documentation**:
   - Complete function description
   - Parameter and return type documentation
   - Multiple usage examples covering all edge cases
   - @throws documentation for error conditions

2. **TypeScript support**:
   - Add TypeScript type definition comment
   - Include proper generic typing if needed

3. **Performance optimization**:
   - Optimize regex patterns for better performance
   - Consider string manipulation efficiency
   - Add performance comments for complex operations

4. **Module export**:
   - Export the function using module.exports format
   - Follow the same pattern as the existing camelCase function in the file

5. **Integration**:
   - Ensure the function follows the same coding style as the existing \`toCamelCase\` function
   - Use consistent error handling patterns
   - Match the documentation format and examples structure

The final function should be production-ready with comprehensive documentation, error handling, and performance considerations.
`;

// =============================================================================
// COMPLETE CHAIN PROMPT
// =============================================================================

const COMPLETE_CHAIN_PROMPT = `
${STEP_1_PROMPT}

---

${STEP_2_PROMPT}

---

${STEP_3_PROMPT}
`;

// =============================================================================
// USAGE INSTRUCTIONS
// =============================================================================

const USAGE_INSTRUCTIONS = `
/**
 * How to use this chain prompt:
 * 
 * 1. Copy and paste STEP_1_PROMPT to your AI assistant
 * 2. Review the basic implementation and test it
 * 3. Copy and paste STEP_2_PROMPT to enhance with error handling
 * 4. Test the enhanced function with edge cases
 * 5. Copy and paste STEP_3_PROMPT to finalize with documentation
 * 
 * Alternatively, use COMPLETE_CHAIN_PROMPT for all steps at once,
 * though the incremental approach allows for better refinement.
 */
`;

// Export the prompts for use
module.exports = {
    STEP_1_PROMPT,
    STEP_2_PROMPT,
    STEP_3_PROMPT,
    COMPLETE_CHAIN_PROMPT,
    USAGE_INSTRUCTIONS
};