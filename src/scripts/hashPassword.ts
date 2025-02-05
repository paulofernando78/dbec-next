import bcrypt from "bcrypt"; // Install bcrypt if not installed

// Example plaintext password
const password = "12345"; // Replace with the actual password you want to hash
const saltRounds = 10;

async function hashPassword() {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hash);
  } catch (error) {
    console.error("Error hashing password:", error);
  }
}

hashPassword();