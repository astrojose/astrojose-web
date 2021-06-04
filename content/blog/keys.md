---
title: "Understanding keys and addresses in bitcoin"  
date: "2021-05-24 20:40:41"
description: "Meet the keys to bitcoin blockchain." 
category: "blockchain"
published: true
---
Understanding the blockain and decentralized applications is hard. But learning fundamental concepts increases the speed of understanding. In this article, concepts of digital keys, signatures and addresses are explored based on programming perspective. They can be really useful when you want to implement blockchain apps like wallets, mining softwares, bitcoin explores, bitcoin ecommerce etc. 

## what is decentralization in bitcoin
Decentralized systems are are interconnected systems  where no party has overall control of they system. As digital payment sytem, bitcoin provide this form of system where there is no central entity (like banks) that control the flow of transactions.

## the cryptography behind: keys and signatures
Digital keys and signatures are fundamental to decentralization of trust. Bitcoin uses pair of related keys(private and public) based on public-key cryptography. Private keys are only known to owner while public keys are may be known by anyone. A sender encrypts a message with receiver's public key(shared publicly) , and sends it publicly, it can only be decrypted with receiver's private keys.  
<br/>


In bitcoin transaction **Digital Signature or witness** is used to prove that one has a private key connected to public key without revealing the private key. Private keys are used to produce digital signature. While signature can be *verified* by anyone with public key, it can only be *produced* by someone with knowledge of private key. This concept of verification of transactions is important because bitcoin is based on peer to peer network. 

## comparing to bank account terms
Recipient's public key is not shared publicly itself, it is represented by bitcoin address which works as beneficiary name in banking. Private keys are like passcode and public keys are like account numbers. Witness or digital signature is like normal hand signature that shows you are the owner of account. 

## the fun part: generating keys
Basically keys are just strings of characters e.g `30848827712021293731208415302456569301499384652082` Decimal or     `4433d156ea29436f29a94e0ccc5d58df8e57bdc8583c32` in hexadecimal.    
<br/>

All these keys are related to each other. Hash function are used to transform keys from one form to another e.g from private key to form public keys, public keys to bitcoin address. 
<br/> 

## generating private keys 
Generating keys is like choosing random number. Bitcoin uses 256-bits number for randomness. Any number is picked at range of `1 to ~2**256`. Simply a binary number with 256 1s and 0s like:-  
`000100011011010110010001001101101100101...`  

`2**256` is very huge number ~ `10**77`, which is much larger than  number of atoms in and on the earth approximately `10**50` !!!(Imagine a number with 50 figures).  

This binary number can be converted to decimal number (contain numbers 0-9)    
`80101199751367646086581405402432952544...`  

Or into hexadecimal (contain 0-9 numbers plus 6 alphabet characters a-f)  
`11B59136CB932F78ACB0EE67864D23A830D1BF...`  
<br/>
Here is the code..

```javascript
const sha256 = require(sha256)

let privKey = sha256('secret')
console.log('> Private Key: ',privKey) 
// > Private Key:  2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b
```

## base58check encoding   
The above key is hexadecimal(**Hex**), represented in Base64 which includes 64 characters(52 lowercase and capital letters, 10 numerals, 2 more characters "+" and "/" ).   
Some character can be easily mistaken or confused e.g letter l, number 1 and letter I, letter O and zero 0.   
Bitcoin uses Base58 encoding to represent keys, the same as Base64 but it excludes 6 characters(0,O,l,I,+ and /). So the bitcoin Base58 alphabet is `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`    

**Base58check** encoding is like error-checking code, it prevents trascriptional errors.  

## generating private key WIF(Wallet Import Format)
The Base58check encoded private key with 5 prefix is called **Wallet Import Format(WIF)** which is used in importing and exporting keys in wallets and generating QR codes.   
It can be done in four steps
1. We add version byte(0x80 in hex) which is used as prefix in encoding private keys(prefix + private key).  
2. SHA256 is applied twice(double-SHA) to prefixed private key to get checksum. 
3. First bytes of checksum is appended to result of step 1 and the result is encoded into base58 format. 

Lets write some code to do the trick, with help of `sha256` and `bs58` libraries.  

``` javascript
const sha256 = require('sha256')
const base58 = require('bs58')

let doubleHash =  sha256.x2('80' + privKey)
let  checksum = doubleHash.substring(0, 8);
let payload = Buffer.from('80'+privKey+checksum, 'hex')
let b58 = base58.encode(payload )

console.log("> Private Key WIF: ", b58)
// > Private Key WIF:  5J9YKiVU3AWNkCa2zfQpj1f2NAeMQhLsYU51N8NM28J1bSNQL2S
```  

## generating public key from private key
Because private key is your secret, With public key, we can use the private key to create singnature that anyone can verify without having the actual private key. 
Public key is generated from private key by using one way cryptographic function called [*Elliptic Curve Multiplication*](https://en.wikipedia.org/wiki/Elliptic_curve_point_multiplication) where its easy to do in one direction but impossible to do in reverse. It involves some complex maths, you can learn more math [here](https://fangpenlin.com/posts/2019/10/07/elliptic-curve-cryptography-explained/) and [here](https://en.wikipedia.org/wiki/Elliptic_curve_point_multiplication#:~:text=Elliptic%20curve%20scalar%20multiplication%20is,producing%20a%20one%2Dway%20function.).  

> Elliptic-curve cryptography (ECC) is an approach to public-key cryptography based on the algebraic structure of elliptic curves over finite fields. ECC allows smaller keys compared to non-EC cryptography (based on plain Galois fields) to provide equivalent security. - Wikipedia  

In bitcoin, there is special parameters for elliptic curve called `secp256k1` with ECDSA algorithms as defined in [Standards for efficient Cryptography(SEC)] learn [more](https://en.bitcoin.it/wiki/Secp256k1).  

Lets focus on coding part, we use javascript impelentation of elliptic curves (`elliptic` library) to generate public key from private key and `secp256k1` for curve standard elliptic curve parameters.   



## generating bitcoin address from public key
Bitcoin address is an actual string of alphanumeric characters that can be shared with anyone want to send you money. In bitcoin transactions, it appears as *recipient* of funds. Usually start with 1 or 3.    

`1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`  

Bitcoin address is derived from public key through one-way cryptographic hashing algorithms specifically, **Secure Hash Algorithm(SHA256)** and **RACE Integrity Primitives Evaluation Message Digest (RIPEMD160)**. A public key is passed on SHA256, the result is computed with RIPEMD160  to generate public key hash which is then encoded with base58check encoding. the result is bitcoin address B.

Startin with public key P.

`Bitcoin Address = RIPEMD160(SHA256(P))`. We use specific javascript libraries to do the trick  
```javascript 


```

## checking the work

## conclusion