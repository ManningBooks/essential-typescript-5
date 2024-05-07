# Typos for *Essential TypeScript 5*

This file contains smaller errors that are unlikely to prevent the code examples from working and which I will correct in the next edition of the book. See [this](errata.md) file for mistakes that prevent the code examples from working as expected.

---

**Chapter 2**

On page 14, this sentence:

>   This file follows the popular convention of calling the main file for an application index, followed by the ts file extension to indicate the file contains JavaScript 
code.

should be:

>   This file follows the popular convention of calling the main file for an application index, followed by the ts file extension to indicate the file contains **TypeScript** code.

(Thanks to Phil Puglisi for reporting this problem)

---

**Chapter 4**

On page 88, this sentence:

>   The #getTaxString method can only be accessed from within the TaxedProduct class and it is an error to use it elsewhere, as shown in listing 4.15.

should be:

>   The **#getDetail** method can only be accessed from within the TaxedProduct class and it is an error to use it elsewhere, as shown in listing 4.15.

(Thanks to Tai for reporting this problem)

---

On page 102, the name of `calcTaxandSum` function in Listing 4.30 should named  `calcTaxAndSum` (with a capital A) to match the name used in Listing 4.31.

(Thanks to Joe Yakich for reporting this problem)

---

On page 103, the output from `Listing 4.3.3` should be:

    Name: Hat, Taxed Price: 108
    Total Price: 147.60

(Thanks to Joe Yakich for reporting this problem)

---

**Chapter 5**

On page 110, the sentence in Table 5.3 should be:

>   For example, specifying ~5.0.2 will accept version **5.0.2** or 5.0.3 (which would contain patches to version 5.0.2) but not version 5.1.0 (which would be a new minor release).

(Thanks to Joe Yakich for reporting this problem)

---

On page 113, this sentence:

>   The compiler can be run directly from the command line and will process all the files shown by the listfile option. 

should be:

>   The compiler can be run directly from the command line and will process all the files shown by the **listFiles** option. 

(Thanks to Joe Yakich for reporting this problem)

---

**Chapter 7**

On page 152, the text that describes the different types uses `false` as an example of a `boolean`, but the preceding listings use `true`.

(Thanks to user156604 for reporting this problem)

---

**Chapter 8**

On page 182, the sentence at the end of the page should be:

>   The addition of the rest parameter means that the calculateTax function can be called with one or more arguments: the first argument is assigned to the amount parameter, the **second** argument (if there is one) is assigned to the discount parameter, and any other arguments are added to the extraFees parameter array.

(Thanks to Fernando Aluzzi for reporting this problem)

---

On page 186, the sentence that follows Listing 8.15 should be:

>   When the noImplicitReturns setting is true, the compiler will report an error when there are paths through functions that don’t explicitly produce a result with the **return** keyword or throw an error. 

(Thanks to Fernando Aluzzi for reporting this problem)

---

**Chapter 10**

On page 223, not all of the changes to Listing 10.6 are marked in bold. The definition of the `products` variable has also changed and this statement should also be bold.

(Thanks to Lynn for reporting this problem)

---

**Chapter 11**

On page 266, the text following Listing `11.19` should be:

>The compiler will allow the data array to store **Person** objects and objects created from its subclasses.


(Thanks to Marshall Rosenstein for reporting this problem)

---

**Chapter 16**

On page 414, the captions for listings 16.16 and 16.17 specify file names that are all lowercase and that do not match the import statements in later listings.

(Thanks to Joe Yakich for reporting this problem)