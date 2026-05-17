window.EXAM_DATA = {
  "papers": [
    {
      "id": "2025",
      "title": "H446/01 June 2025",
      "pdf": "pdfs/H44601 Computer systems June 2025.pdf",
      "groups": [
        {
          "id": "2025-q1",
          "title": "Q1 – Hardware, GPU, operating systems and utilities",
          "topic": "Hardware and operating systems",
          "questions": [
            {
              "id": "25-1a",
              "text": "In a computer system, what is the purpose of the address bus?",
              "options": [
                "Carries memory addresses between the CPU and memory",
                "Carries the actual data being processed",
                "Stores the next instruction permanently",
                "Translates high-level code into machine code"
              ],
              "answer": 0,
              "explanation": "The address bus carries the memory location that data will be sent to or fetched from.",
              "fact": "H446 expects you to distinguish the three buses: data carries data/instructions, address carries locations, control carries control signals.",
              "page": 1
            },
            {
              "id": "25-1b",
              "text": "Charlie is editing HD graphics and videos. Which secondary storage type is most suitable for large working files if speed is important?",
              "options": [
                "Optical disc because it is read-only",
                "Magnetic or solid state storage with large capacity",
                "ROM because it stores startup instructions",
                "Cache because it is secondary storage"
              ],
              "answer": 1,
              "explanation": "A large HDD or SSD would be appropriate. SSD is faster; magnetic storage can offer large capacity cheaply.",
              "fact": "Secondary storage is non-volatile. Cache and RAM are primary storage, not secondary storage.",
              "page": 2
            },
            {
              "id": "25-1c",
              "text": "Which processor is best suited to simple operations in parallel on large data sets?",
              "options": [
                "CPU",
                "GPU",
                "BIOS",
                "MDR"
              ],
              "answer": 1,
              "explanation": "A GPU has many cores designed for parallel graphics-style processing.",
              "fact": "A CPU is suited to complex general-purpose operations; a GPU is suited to many simpler parallel operations.",
              "page": 3
            },
            {
              "id": "25-1d",
              "text": "Charlie wants several applications open at the same time. Which type of operating system is needed?",
              "options": [
                "Real-time",
                "Multi-tasking",
                "Embedded",
                "Distributed"
              ],
              "answer": 1,
              "explanation": "A multi-tasking operating system allows several programs/processes to appear to run at the same time.",
              "fact": "Multi-tasking OS is different from multi-user OS: multi-user allows multiple users, not just multiple programs.",
              "page": 4
            },
            {
              "id": "25-1e",
              "text": "Why does hardware usually need a device driver?",
              "options": [
                "To let the OS communicate with the device using the correct instructions",
                "To increase the CPU clock speed",
                "To store the BIOS in RAM",
                "To replace the need for secondary storage"
              ],
              "answer": 0,
              "explanation": "A driver translates between the operating system/software and the specific hardware device.",
              "fact": "Device drivers abstract the details of different hardware so software can use devices consistently.",
              "page": 4
            },
            {
              "id": "25-1f",
              "text": "Which pair are both examples of utility software?",
              "options": [
                "Word processor and spreadsheet",
                "Anti-virus and backup software",
                "Web browser and database",
                "Compiler and interpreter"
              ],
              "answer": 1,
              "explanation": "Anti-virus and backup software are utilities used to maintain, secure or manage the computer system.",
              "fact": "Utility software supports the running and maintenance of the system rather than doing a general user task like writing a letter.",
              "page": 5
            }
          ]
        },
        {
          "id": "2025-q2",
          "title": "Q2 – CPU architecture, RISC/CISC and virtualisation",
          "topic": "CPU architecture and virtualisation",
          "questions": [
            {
              "id": "25-2a",
              "text": "Which statement correctly compares Von Neumann and Harvard architecture?",
              "options": [
                "Von Neumann uses separate memories for data and instructions; Harvard uses one shared memory",
                "Von Neumann stores data and instructions together; Harvard stores them separately",
                "Both always use the same single bus for data and instructions",
                "Harvard cannot fetch data and instructions at the same time"
              ],
              "answer": 1,
              "explanation": "Von Neumann uses one shared memory for data and instructions; Harvard separates them.",
              "fact": "OCR often asks for a full comparison: same feature on both sides, not just one vague statement.",
              "page": 5
            },
            {
              "id": "25-2b",
              "text": "Which is a benefit of pipelining?",
              "options": [
                "It allows stages of different instructions to overlap",
                "It makes every individual instruction require fewer bits",
                "It removes the need for registers",
                "It converts CISC into RISC"
              ],
              "answer": 0,
              "explanation": "Pipelining overlaps fetch/decode/execute stages for different instructions, increasing throughput.",
              "fact": "Pipelining improves throughput, but does not necessarily make a single instruction execute faster.",
              "page": 5
            },
            {
              "id": "25-2c",
              "text": "Which statement is true about RISC compared with CISC?",
              "options": [
                "RISC normally has a smaller instruction set",
                "RISC normally has more complex instructions",
                "RISC always requires more cooling",
                "RISC cannot be pipelined"
              ],
              "answer": 0,
              "explanation": "RISC uses a reduced instruction set, often with simpler instructions that are easier to pipeline.",
              "fact": "CISC has a complex instruction set; RISC has a reduced instruction set.",
              "page": 6
            },
            {
              "id": "25-2d",
              "text": "What is a virtual machine?",
              "options": [
                "A software-based machine that behaves like a computer or hardware platform",
                "A physical hard disk used for backups",
                "A processor register used in FDE",
                "A browser cache"
              ],
              "answer": 0,
              "explanation": "A VM is software that behaves like a separate computer and runs on a real host machine.",
              "fact": "Virtual machines can isolate software and make resource allocation flexible.",
              "page": 7
            },
            {
              "id": "25-2e",
              "text": "In the remote database scenario, what is a likely advantage of a thin-client approach?",
              "options": [
                "All complex processing is done on every employee laptop",
                "Sensitive data and processing can be centralised on the server",
                "It works fully without any network connection",
                "It removes the need for any server security"
              ],
              "answer": 1,
              "explanation": "Thin clients mainly capture input and display output; processing and storage are centralised.",
              "fact": "Thin clients depend heavily on network access; thick clients do more processing locally.",
              "page": 7
            }
          ]
        },
        {
          "id": "2025-q3",
          "title": "Q3 – Number systems and bitwise operations",
          "topic": "Data representation",
          "questions": [
            {
              "id": "25-3a",
              "text": "What is denary 189 in hexadecimal?",
              "options": [
                "BD",
                "DB",
                "E4",
                "12A"
              ],
              "answer": 0,
              "explanation": "189 ÷ 16 gives 11 remainder 13, so hexadecimal is B D.",
              "fact": "Hexadecimal digits A–F represent denary 10–15.",
              "page": 9
            },
            {
              "id": "25-3b",
              "text": "What is the effect of a right shift of three places on a positive binary number?",
              "options": [
                "Multiplies it by 8",
                "Divides it by 8",
                "Divides it by 3",
                "Converts it to hexadecimal"
              ],
              "answer": 1,
              "explanation": "A right shift by 3 places divides a positive binary integer by 2³ = 8.",
              "fact": "A left shift multiplies by powers of 2; a right shift divides by powers of 2 for positive integers.",
              "page": 9
            },
            {
              "id": "25-3c",
              "text": "What does a bitwise AND mask usually do?",
              "options": [
                "Extracts or disables selected bits",
                "Adds two bytes together",
                "Stores text using Unicode",
                "Compresses data using run length encoding"
              ],
              "answer": 0,
              "explanation": "AND with 1 keeps a bit; AND with 0 clears a bit. This can extract/disable parts of a byte.",
              "fact": "Bitwise operations work on individual bits, not whole denary values.",
              "page": 11
            },
            {
              "id": "25-3d",
              "text": "If the byte 1010 0011 is ANDed with the mask 1010 1110, what is the result?",
              "options": [
                "1010 0010",
                "1010 1111",
                "0000 0001",
                "1111 1111"
              ],
              "answer": 0,
              "explanation": "Only positions where both bits are 1 remain 1, giving 1010 0010.",
              "fact": "For AND: 1 AND 1 = 1; all other combinations give 0.",
              "page": 11
            }
          ]
        },
        {
          "id": "2025-q4",
          "title": "Q4 – LMC and programming languages",
          "topic": "LMC and language levels",
          "questions": [
            {
              "id": "25-4a",
              "text": "Which LMC mnemonic branches without checking the accumulator?",
              "options": [
                "BRZ",
                "BRP",
                "BRA",
                "STA"
              ],
              "answer": 2,
              "explanation": "BRA is an unconditional branch.",
              "fact": "BRZ branches if zero; BRP branches if zero or positive; BRA always branches.",
              "page": 11
            },
            {
              "id": "25-4b",
              "text": "Which LMC command stores the accumulator into a memory address?",
              "options": [
                "LDA",
                "STA",
                "INP",
                "OUT"
              ],
              "answer": 1,
              "explanation": "STA stores the current accumulator value into the labelled memory location.",
              "fact": "LDA loads into the accumulator; STA stores from the accumulator.",
              "page": 11
            },
            {
              "id": "25-4c",
              "text": "Why might a device driver be written in a low-level language?",
              "options": [
                "It needs direct control over hardware",
                "It is mainly a word processing task",
                "It never needs translating",
                "It is easier for beginners to read"
              ],
              "answer": 0,
              "explanation": "Device drivers often need direct hardware access and efficient control of memory or registers.",
              "fact": "Low-level languages are close to hardware and are architecture-specific.",
              "page": 12
            },
            {
              "id": "25-4d",
              "text": "Which project is most likely to need a high-level language?",
              "options": [
                "A mobile news app with user interface and network requests",
                "A device driver for new hardware",
                "Very small embedded sensor firmware only",
                "Direct register control code"
              ],
              "answer": 0,
              "explanation": "A mobile app benefits from higher-level libraries, UI tools and portability.",
              "fact": "High-level languages are problem-oriented and speed up development.",
              "page": 12
            }
          ]
        },
        {
          "id": "2025-q5",
          "title": "Q5 – Logic circuits, adders and Karnaugh maps",
          "topic": "Logic and Boolean algebra",
          "questions": [
            {
              "id": "25-5a",
              "text": "For a half adder, what are the Sum and Carry outputs when A=1 and B=1?",
              "options": [
                "S=1, C=0",
                "S=0, C=1",
                "S=1, C=1",
                "S=0, C=0"
              ],
              "answer": 1,
              "explanation": "1 + 1 in binary gives sum 0 and carry 1.",
              "fact": "A half adder has two inputs and no carry-in.",
              "page": 14
            },
            {
              "id": "25-5b",
              "text": "What is the key difference between a half adder and a full adder?",
              "options": [
                "A full adder has a carry-in input",
                "A half adder uses three inputs",
                "A full adder cannot produce carry out",
                "A half adder uses only NAND gates"
              ],
              "answer": 0,
              "explanation": "A full adder adds A, B and a carry-in from the previous stage.",
              "fact": "Half adders add two bits; full adders add two bits plus carry-in.",
              "page": 14
            },
            {
              "id": "25-5c",
              "text": "Using De Morgan’s law, what is ¬A ∨ ¬B equivalent to?",
              "options": [
                "¬(A ∧ B)",
                "¬(A ∨ B)",
                "A ∧ B",
                "A ∨ B"
              ],
              "answer": 0,
              "explanation": "De Morgan: NOT A OR NOT B equals NOT(A AND B).",
              "fact": "De Morgan’s laws swap AND/OR when the NOT is moved outside/inside.",
              "page": 16
            },
            {
              "id": "25-5d",
              "text": "Using double negation, what does ¬(¬B) simplify to?",
              "options": [
                "¬B",
                "B",
                "0",
                "1"
              ],
              "answer": 1,
              "explanation": "Double negation cancels out, so NOT NOT B is B.",
              "fact": "Double negation is a common one-mark simplification in H446 logic.",
              "page": 16
            }
          ]
        },
        {
          "id": "2025-q6",
          "title": "Q6 – Libraries, translators and SQL",
          "topic": "Software development and SQL",
          "questions": [
            {
              "id": "25-6a",
              "text": "Which is a benefit of using software libraries?",
              "options": [
                "They provide pre-tested reusable code",
                "They prevent all syntax errors automatically",
                "They remove the need for any compiler",
                "They only work in assembly language"
              ],
              "answer": 0,
              "explanation": "Libraries save development time and often contain tested, optimised routines.",
              "fact": "Software libraries reduce development time and improve consistency across applications.",
              "page": 17
            },
            {
              "id": "25-6b",
              "text": "Which compilation stage removes comments and whitespace and converts code into tokens?",
              "options": [
                "Code generation",
                "Code optimisation",
                "Lexical analysis",
                "Syntax analysis"
              ],
              "answer": 2,
              "explanation": "Lexical analysis tokenises the source code and removes comments/whitespace.",
              "fact": "Syntax analysis checks grammar and builds an abstract syntax tree.",
              "page": 17
            },
            {
              "id": "25-6c",
              "text": "Which is a benefit of using an interpreter during development?",
              "options": [
                "It helps test and debug code line by line",
                "It always hides source code",
                "It produces the fastest executable",
                "It removes the need for source code"
              ],
              "answer": 0,
              "explanation": "Interpreters execute line by line, making debugging easier.",
              "fact": "Compilers usually produce executable/object code; interpreters translate at runtime.",
              "page": 18
            },
            {
              "id": "25-6d",
              "text": "In SQL, which command adds a new record to a table?",
              "options": [
                "UPDATE",
                "INSERT INTO",
                "DELETE FROM",
                "SELECT"
              ],
              "answer": 1,
              "explanation": "INSERT INTO adds a new row/record.",
              "fact": "H446 SQL includes SELECT, INSERT, UPDATE and DELETE style commands.",
              "page": 18
            },
            {
              "id": "25-6e",
              "text": "What is a nested SELECT?",
              "options": [
                "A SELECT statement used inside another SQL statement",
                "A query that deletes all matching rows",
                "A CSS selector inside HTML",
                "A command that only works on primary keys"
              ],
              "answer": 0,
              "explanation": "A nested SELECT uses one query inside another, often to compare with a value found by the inner query.",
              "fact": "Nested queries are useful when a condition depends on another query result.",
              "page": 19
            }
          ]
        },
        {
          "id": "2025-q7",
          "title": "Q7 – AI, legal and moral issues, and compression",
          "topic": "AI ethics and compression",
          "questions": [
            {
              "id": "25-7a",
              "text": "What does AI mean in the OCR H446 context?",
              "options": [
                "Systems performing tasks normally requiring human intelligence",
                "Any program that uses a database",
                "A file compression method",
                "Only a physical robot"
              ],
              "answer": 0,
              "explanation": "AI refers to systems carrying out tasks such as pattern recognition, learning or decision-making.",
              "fact": "Machine learning is a subset of AI where systems improve from data/experience.",
              "page": 20
            },
            {
              "id": "25-7b",
              "text": "Why could randomly scraping internet photos to train an AI have legal issues?",
              "options": [
                "Photos may be copyrighted or contain personal data",
                "JPEG files cannot be read by AI",
                "AI cannot process images",
                "All online images are automatically public domain"
              ],
              "answer": 0,
              "explanation": "Images may be protected by copyright and may include personal data.",
              "fact": "Legal and moral issues around AI often include copyright, privacy, bias and consent.",
              "page": 20
            },
            {
              "id": "25-7c",
              "text": "What type of compression is run length encoding?",
              "options": [
                "Lossless",
                "Lossy",
                "Encryption",
                "Hashing"
              ],
              "answer": 0,
              "explanation": "RLE stores repeated runs of data and can reconstruct the original exactly.",
              "fact": "Run length encoding works best when data contains repeated values.",
              "page": 21
            }
          ]
        },
        {
          "id": "2025-q8",
          "title": "Q8 – Databases, ERD and client-side JavaScript",
          "topic": "Databases and web programming",
          "questions": [
            {
              "id": "25-8a",
              "text": "What is a limitation of a flat-file database?",
              "options": [
                "It can cause repeated data and inconsistency as data grows",
                "It automatically removes all redundancy",
                "It cannot store text",
                "It is always more secure than a relational database"
              ],
              "answer": 0,
              "explanation": "Flat files store data in one table/file, which can lead to duplicated data and update anomalies.",
              "fact": "Relational databases use linked tables with primary and foreign keys.",
              "page": 22
            },
            {
              "id": "25-8b",
              "text": "In an ERD, what does a foreign key show?",
              "options": [
                "A link to a primary key in another table",
                "A field that must be deleted",
                "A table with no records",
                "A compressed field"
              ],
              "answer": 0,
              "explanation": "A foreign key creates a relationship by referencing a primary key in another table.",
              "fact": "ERDs show relationships between entities/tables.",
              "page": 23
            },
            {
              "id": "25-8c",
              "text": "What is required for a database to be in 2NF?",
              "options": [
                "It must be in 1NF and have no partial dependencies",
                "It must contain only one table",
                "It must have no primary key",
                "It must use only Boolean fields"
              ],
              "answer": 0,
              "explanation": "Second Normal Form requires 1NF and removal of partial dependencies on part of a composite key.",
              "fact": "3NF goes further and removes non-key dependencies/transitive dependencies.",
              "page": 24
            },
            {
              "id": "25-8d",
              "text": "Why might quiz answer checking be done client-side in JavaScript?",
              "options": [
                "It can provide immediate feedback in the browser",
                "It permanently secures the database",
                "It guarantees answers cannot be viewed",
                "It avoids using HTML elements"
              ],
              "answer": 0,
              "explanation": "Client-side JavaScript can check displayed answers quickly without a server round-trip.",
              "fact": "Client-side validation is responsive, but important security checks should still happen server-side.",
              "page": 25
            }
          ]
        }
      ]
    },
    {
      "id": "2024",
      "title": "H446/01 June 2024",
      "pdf": "pdfs/H44601 Computer systems June 2024.pdf",
      "groups": [
        {
          "id": "2024-q1",
          "title": "Q1 – FDE cycle, LMC, addressing and RAM",
          "topic": "CPU and LMC",
          "questions": [
            {
              "id": "24-1a",
              "text": "During the fetch stage, what is copied from the Program Counter to the MAR?",
              "options": [
                "The address of the next instruction",
                "The contents of the accumulator",
                "The decoded opcode",
                "The result of the ALU calculation"
              ],
              "answer": 0,
              "explanation": "The PC stores the address of the next instruction; this is copied to the MAR.",
              "fact": "Fetch-stage answers should name registers and buses accurately: PC, MAR, MDR, CIR, address bus, data bus and control bus.",
              "page": 1
            },
            {
              "id": "24-1b",
              "text": "Which register is altered during a branch instruction?",
              "options": [
                "Program Counter",
                "Memory Data Register",
                "Accumulator only",
                "Current Instruction Register only"
              ],
              "answer": 0,
              "explanation": "A branch changes the PC so the next instruction is fetched from a different address.",
              "fact": "Branch instructions change control flow by changing the Program Counter.",
              "page": 1
            },
            {
              "id": "24-1c",
              "text": "Why does pipelining improve CPU performance?",
              "options": [
                "It overlaps stages of the FDE cycle for different instructions",
                "It removes the need for RAM",
                "It stores all instructions permanently in cache",
                "It executes only one instruction at a time"
              ],
              "answer": 0,
              "explanation": "Pipelining fetches one instruction while another is decoded/executed, improving throughput.",
              "fact": "Do not describe pipelining as multiple cores; it is overlap inside instruction processing.",
              "page": 2
            },
            {
              "id": "24-1d",
              "text": "Which memory addressing mode places the actual value directly in the instruction?",
              "options": [
                "Immediate",
                "Indirect",
                "Indexed",
                "Direct"
              ],
              "answer": 0,
              "explanation": "Immediate addressing uses the operand value itself, not a memory address holding the value.",
              "fact": "H446 addressing modes include immediate, direct, indirect and indexed.",
              "page": 4
            },
            {
              "id": "24-1e",
              "text": "Why can adding more RAM improve performance?",
              "options": [
                "It reduces the need to use slower virtual memory",
                "It makes the CPU clock speed physically higher",
                "It converts HDD into cache",
                "It removes the need for an OS"
              ],
              "answer": 0,
              "explanation": "More RAM allows more active data/programs to stay in fast primary memory.",
              "fact": "Overuse of virtual memory can cause disk thrashing and slow performance.",
              "page": 4
            }
          ]
        },
        {
          "id": "2024-q2",
          "title": "Q2 – Embedded systems, storage, BIOS, OS and culture",
          "topic": "Embedded systems and OS",
          "questions": [
            {
              "id": "24-2a",
              "text": "Which input device would be suitable in a fitness tracker to measure pulse?",
              "options": [
                "Heart rate sensor",
                "Plotter",
                "Projector",
                "Optical disc"
              ],
              "answer": 0,
              "explanation": "A heart-rate sensor can detect pulse/electrical activity.",
              "fact": "Input devices capture data from the environment; output devices present data to the user.",
              "page": 5
            },
            {
              "id": "24-2b",
              "text": "Why is flash storage suitable for a wearable fitness tracker?",
              "options": [
                "It has no moving parts and is small/low power",
                "It requires a large cooling fan",
                "It is volatile and loses data when off",
                "It can only be read once"
              ],
              "answer": 0,
              "explanation": "Flash storage is durable, portable and low power, making it suitable for a wearable device.",
              "fact": "Solid-state storage has no moving parts.",
              "page": 6
            },
            {
              "id": "24-2c",
              "text": "What does the BIOS do when a computer starts?",
              "options": [
                "Performs startup checks and helps load the OS",
                "Compresses all user files",
                "Deletes RAM permanently",
                "Runs every application package"
              ],
              "answer": 0,
              "explanation": "BIOS performs POST/startup checks and locates/loads the bootstrap/OS.",
              "fact": "BIOS is stored in ROM/firmware and is used at startup.",
              "page": 7
            },
            {
              "id": "24-2d",
              "text": "Which scheduling algorithm gives each process a fixed time slice?",
              "options": [
                "Round robin",
                "First come first served",
                "Shortest job first",
                "Shortest remaining time"
              ],
              "answer": 0,
              "explanation": "Round robin allocates each process a time quantum before moving to the next.",
              "fact": "Round robin is suitable for multitasking because processes get regular CPU time.",
              "page": 8
            },
            {
              "id": "24-2e",
              "text": "For a worldwide athlete interface, why might Unicode be preferred to ASCII?",
              "options": [
                "Unicode can represent far more languages and symbols",
                "Unicode stores fewer characters than ASCII",
                "ASCII is always 32-bit only",
                "ASCII can represent every world language"
              ],
              "answer": 0,
              "explanation": "Unicode supports a much wider range of characters than ASCII.",
              "fact": "Cultural interface design may consider layout direction, colours and character sets.",
              "page": 9
            }
          ]
        },
        {
          "id": "2024-q3",
          "title": "Q3 – Application software, thin clients, compression, linkers and loaders",
          "topic": "Software and virtual machines",
          "questions": [
            {
              "id": "24-3a",
              "text": "Which application software is most appropriate for storing, searching and updating client details?",
              "options": [
                "Database software",
                "Graphics software",
                "Presentation software",
                "Media player"
              ],
              "answer": 0,
              "explanation": "Database software is designed for structured storage, searching and updating records.",
              "fact": "OCR usually expects software types, not brand names.",
              "page": 10
            },
            {
              "id": "24-3b",
              "text": "What is a thin client?",
              "options": [
                "A low-powered computer that relies on a central server for applications/processing",
                "A computer with no network connection",
                "A CPU with a reduced instruction set",
                "A compressed file format"
              ],
              "answer": 0,
              "explanation": "A thin client mainly sends input and displays output while the server runs applications.",
              "fact": "Thin clients reduce local hardware needs but rely on server/network availability.",
              "page": 11
            },
            {
              "id": "24-3c",
              "text": "Why should lossless compression be used for text/input sent to a virtual machine?",
              "options": [
                "The original data must be fully reconstructed",
                "It deliberately lowers the quality",
                "It permanently removes repeated letters",
                "It encrypts all data"
              ],
              "answer": 0,
              "explanation": "Lossless compression allows exact restoration; lossy could corrupt text/data.",
              "fact": "Lossy compression removes data permanently; lossless preserves the original data.",
              "page": 11
            },
            {
              "id": "24-3d",
              "text": "What does a linker do?",
              "options": [
                "Combines program code with libraries to form an executable",
                "Loads the OS from ROM",
                "Schedules CPU processes",
                "Stores keyboard input in a queue"
              ],
              "answer": 0,
              "explanation": "A linker links object code and libraries into a single executable or links to needed libraries.",
              "fact": "A loader loads an executable into memory so it can run.",
              "page": 12
            },
            {
              "id": "24-3e",
              "text": "What does a loader do?",
              "options": [
                "Loads an executable/program into memory",
                "Removes syntax errors from source code",
                "Creates HTML tags",
                "Encrypts passwords"
              ],
              "answer": 0,
              "explanation": "The loader loads the executable from secondary storage into memory for execution.",
              "fact": "Linker and loader are separate parts of the translation/execution process.",
              "page": 12
            }
          ]
        },
        {
          "id": "2024-q4",
          "title": "Q4 – Binary, hexadecimal and floating point",
          "topic": "Data representation",
          "questions": [
            {
              "id": "24-4a",
              "text": "What is -124 as 8-bit two’s complement?",
              "options": [
                "1000 0100",
                "1111 1100",
                "0111 1100",
                "1001 0100"
              ],
              "answer": 0,
              "explanation": "124 is 01111100; invert and add 1 gives 10000100.",
              "fact": "Two’s complement has one representation of zero and is easier for arithmetic.",
              "page": 12
            },
            {
              "id": "24-4b",
              "text": "What is denary 298 in hexadecimal?",
              "options": [
                "12A",
                "A12",
                "1BA",
                "BD"
              ],
              "answer": 0,
              "explanation": "298 = 18 remainder 10, then 1 remainder 2, so 12A.",
              "fact": "Convert to hex by dividing by 16 or grouping binary into nibbles.",
              "page": 13
            },
            {
              "id": "24-4c",
              "text": "In floating point, increasing mantissa bits increases what?",
              "options": [
                "Precision/accuracy",
                "Range only",
                "Clock speed",
                "Number of cores"
              ],
              "answer": 0,
              "explanation": "More mantissa bits give more precision.",
              "fact": "Exponent bits affect range/magnitude; mantissa bits affect precision.",
              "page": 13
            },
            {
              "id": "24-4d",
              "text": "What is another representation for negative binary numbers besides two’s complement?",
              "options": [
                "Sign and magnitude",
                "ASCII",
                "Unicode",
                "BCD only"
              ],
              "answer": 0,
              "explanation": "Sign and magnitude uses the first bit as the sign bit.",
              "fact": "Two’s complement is generally preferred for arithmetic.",
              "page": 12
            }
          ]
        },
        {
          "id": "2024-q5",
          "title": "Q5 – Logic circuits and Boolean algebra",
          "topic": "Logic",
          "questions": [
            {
              "id": "24-5a",
              "text": "For an alarm that sounds when A or B detects movement, C is set, and D test mode is NOT enabled, which expression matches the logic?",
              "options": [
                "(A OR B) AND C AND NOT D",
                "A AND B AND C AND D",
                "NOT(A OR B) AND C",
                "(A OR B) OR C OR D"
              ],
              "answer": 0,
              "explanation": "The siren needs either sensor, alarm set, and not test mode.",
              "fact": "Build logic expressions from the scenario one condition at a time.",
              "page": 15
            },
            {
              "id": "24-5b",
              "text": "Using De Morgan’s first law, ¬A ∨ ¬B simplifies to:",
              "options": [
                "¬(A ∧ B)",
                "¬(A ∨ B)",
                "A ∧ B",
                "A ∨ B"
              ],
              "answer": 0,
              "explanation": "NOT A OR NOT B equals NOT(A AND B).",
              "fact": "A common mistake is to keep OR instead of changing it to AND.",
              "page": 16
            },
            {
              "id": "24-5c",
              "text": "What does (A ∨ B) ∧ (A ∨ C) simplify to using distribution?",
              "options": [
                "A ∨ (B ∧ C)",
                "A ∧ (B ∨ C)",
                "A ∨ B ∨ C",
                "A ∧ B ∧ C"
              ],
              "answer": 0,
              "explanation": "The common A can be factored, giving A OR (B AND C).",
              "fact": "Distribution can reduce repeated terms in Boolean algebra.",
              "page": 16
            }
          ]
        },
        {
          "id": "2024-q6",
          "title": "Q6 – Search indexing, PageRank, client/server and networks",
          "topic": "Web and networks",
          "questions": [
            {
              "id": "24-6a",
              "text": "What is search engine indexing?",
              "options": [
                "Building a database of keywords and links to relevant pages",
                "Encrypting every webpage",
                "Deleting old websites",
                "Ranking files by file size only"
              ],
              "answer": 0,
              "explanation": "Crawlers collect words/metadata and store links in a search index.",
              "fact": "When searching, users search the search engine’s index, not the live whole web directly.",
              "page": 17
            },
            {
              "id": "24-6b",
              "text": "Which factor can improve a webpage’s PageRank?",
              "options": [
                "High-quality incoming links from important pages",
                "Removing all headings",
                "Using no keywords anywhere",
                "Blocking every crawler"
              ],
              "answer": 0,
              "explanation": "Links from important pages increase a page’s authority/ranking.",
              "fact": "PageRank models pages as nodes and hyperlinks as directed edges.",
              "page": 17
            },
            {
              "id": "24-6c",
              "text": "Which task should be server-side?",
              "options": [
                "Running database queries to check stock",
                "Applying CSS styles",
                "Running JavaScript surname validation in the browser",
                "Displaying HTML once received"
              ],
              "answer": 0,
              "explanation": "Database stock queries should run on the server to protect data and access the database.",
              "fact": "Client-side work happens in the browser; server-side work happens on the web server/backend.",
              "page": 19
            },
            {
              "id": "24-6d",
              "text": "What does a network protocol provide?",
              "options": [
                "A set of rules for data communication between devices",
                "A physical cable only",
                "A spreadsheet formula",
                "A type of monitor"
              ],
              "answer": 0,
              "explanation": "Protocols standardise how data is formatted, transmitted and received.",
              "fact": "Protocols are important because different devices and software need predictable rules.",
              "page": 19
            },
            {
              "id": "24-6e",
              "text": "Which device forwards data to the intended recipient using MAC addresses on a LAN?",
              "options": [
                "Switch",
                "Hub",
                "Monitor",
                "Keyboard"
              ],
              "answer": 0,
              "explanation": "A switch uses MAC addresses to forward frames to the correct device.",
              "fact": "A hub broadcasts; a switch forwards more intelligently.",
              "page": 20
            }
          ]
        },
        {
          "id": "2024-q7",
          "title": "Q7 – Flat file vs relational databases",
          "topic": "Databases",
          "questions": [
            {
              "id": "24-7a",
              "text": "What is a flat-file database?",
              "options": [
                "Data stored in a single table/file",
                "A database that must contain many linked tables",
                "A database with no records",
                "A type of CPU register"
              ],
              "answer": 0,
              "explanation": "Flat file databases store data in one table/file, often with all fields together.",
              "fact": "Flat files can be simple but can cause repeated data as systems grow.",
              "page": 20
            },
            {
              "id": "24-7b",
              "text": "Why is a relational database better for Rosa as membership grows?",
              "options": [
                "It can reduce repeated data using linked tables",
                "It only allows one record",
                "It cannot use primary keys",
                "It prevents any querying"
              ],
              "answer": 0,
              "explanation": "Separate linked tables for members, bookings and instructors reduce redundancy.",
              "fact": "Relational databases link tables using primary and foreign keys.",
              "page": 20
            },
            {
              "id": "24-7c",
              "text": "Which is a drawback of a relational database?",
              "options": [
                "It is more complex to design and normalise",
                "It cannot store more than 150 records",
                "It always stores all data in one field",
                "It cannot use SQL"
              ],
              "answer": 0,
              "explanation": "Relational databases require careful design, keys and normalisation.",
              "fact": "Use evaluation: complexity may be worth it for larger, growing systems.",
              "page": 20
            }
          ]
        },
        {
          "id": "2024-q8",
          "title": "Q8 – Binary search trees and arrays",
          "topic": "Trees",
          "questions": [
            {
              "id": "24-8a",
              "text": "How can a binary search tree be stored in a 2D array?",
              "options": [
                "Columns can store left pointer, data and right pointer",
                "Every row must store only one character",
                "It cannot be represented in an array",
                "Only the root node can be stored"
              ],
              "answer": 0,
              "explanation": "A common representation uses left pointer, data, right pointer for each node.",
              "fact": "A leaf node has null pointers for missing children.",
              "page": 22
            },
            {
              "id": "24-8b",
              "text": "In a binary search tree, where is a value smaller than the current node usually placed?",
              "options": [
                "Left subtree",
                "Right subtree",
                "Always at root",
                "It is deleted"
              ],
              "answer": 0,
              "explanation": "Smaller values go left; larger values go right.",
              "fact": "String BST comparisons use alphabetical order.",
              "page": 23
            },
            {
              "id": "24-8c",
              "text": "What is a leaf node?",
              "options": [
                "A node with no children",
                "A node with two children",
                "The first node only",
                "A duplicate foreign key"
              ],
              "answer": 0,
              "explanation": "A leaf node has no left or right child.",
              "fact": "Tree diagrams and array pointers should show leaf pointers as null.",
              "page": 22
            }
          ]
        },
        {
          "id": "2024-q9",
          "title": "Q9 – Object-oriented programming",
          "topic": "OOP",
          "questions": [
            {
              "id": "24-9a",
              "text": "In the Dog class, why should attributes such as name and breed be private?",
              "options": [
                "To support encapsulation and control access through methods",
                "To stop the object being created",
                "To make them global variables",
                "To force them to be stored in ROM"
              ],
              "answer": 0,
              "explanation": "Private attributes protect data and encourage controlled access.",
              "fact": "Encapsulation means bundling data and methods while restricting direct access to internal data.",
              "page": 23
            },
            {
              "id": "24-9b",
              "text": "What should a constructor do in the Dog class?",
              "options": [
                "Set attributes to the values passed as parameters",
                "Delete the object immediately",
                "Always return a Boolean",
                "Run a binary search"
              ],
              "answer": 0,
              "explanation": "The constructor initialises the new object’s attributes.",
              "fact": "Constructors are called when an object is instantiated.",
              "page": 23
            }
          ]
        },
        {
          "id": "2024-q10",
          "title": "Q10 – Legal issues: RIPA and Data Protection",
          "topic": "Legal and ethical issues",
          "questions": [
            {
              "id": "24-10a",
              "text": "Which is a power associated with the Regulation of Investigatory Powers Act?",
              "options": [
                "Monitoring/intercepting communications in specified circumstances",
                "Requiring all software to be open source",
                "Setting CPU clock speed limits",
                "Banning all encryption"
              ],
              "answer": 0,
              "explanation": "RIPA concerns investigatory powers such as interception/surveillance under legal authority.",
              "fact": "Legal questions often require purpose, powers, who has them, and benefits/drawbacks.",
              "page": 25
            },
            {
              "id": "24-10b",
              "text": "Which is a Data Protection principle?",
              "options": [
                "Personal data should be processed lawfully, fairly and transparently",
                "Data must always be stored forever",
                "Data should never be backed up",
                "Passwords must be exactly 8 characters"
              ],
              "answer": 0,
              "explanation": "Data protection principles include lawful/fair/transparent processing, accuracy, security and limits on storage/use.",
              "fact": "For H446, learn principles rather than only naming the Act.",
              "page": 25
            }
          ]
        }
      ]
    },
    {
      "id": "2023",
      "title": "H446/01 June 2023",
      "pdf": "pdfs/H44601 Computer Systems June 2023.pdf",
      "groups": [
        {
          "id": "2023-q1",
          "title": "Q1 – Software, BIOS, virtual storage, LAN and OS",
          "topic": "Software and operating systems",
          "questions": [
            {
              "id": "23-1a",
              "text": "What is a benefit of using a spreadsheet for wages compared with manual calculation?",
              "options": [
                "Formulae can recalculate values automatically",
                "It prevents all data entry errors",
                "It removes the need for any input",
                "It is open source by default"
              ],
              "answer": 0,
              "explanation": "Spreadsheets can use formulae to calculate and recalculate results quickly.",
              "fact": "Avoid vague “faster/easier” unless you explain why.",
              "page": 1
            },
            {
              "id": "23-1b",
              "text": "What is a drawback of closed-source software?",
              "options": [
                "The source code cannot normally be viewed or modified",
                "It is always free to edit",
                "It has no licence restrictions",
                "It must be stored in ROM"
              ],
              "answer": 0,
              "explanation": "Closed-source users normally cannot inspect or change the source code.",
              "fact": "Open source allows access to source code; closed source restricts it.",
              "page": 1
            },
            {
              "id": "23-1c",
              "text": "Which BIOS statement is true?",
              "options": [
                "BIOS can alter hardware boot settings",
                "BIOS settings are stored in normal RAM",
                "BIOS stands for Boot Input Output Standard",
                "BIOS is a word processor"
              ],
              "answer": 0,
              "explanation": "BIOS/UEFI settings can include boot order and hardware configuration.",
              "fact": "BIOS is startup firmware, not application software.",
              "page": 2
            },
            {
              "id": "23-1d",
              "text": "Why is virtual/cloud storage suitable for backups?",
              "options": [
                "It can be remote from the original computers",
                "It is volatile like RAM",
                "It can only store one file",
                "It makes backups unnecessary"
              ],
              "answer": 0,
              "explanation": "Remote storage can protect against local disasters and allow central backup.",
              "fact": "Virtual storage may appear local but be stored elsewhere/on servers.",
              "page": 2
            },
            {
              "id": "23-1e",
              "text": "What is a network protocol?",
              "options": [
                "A set of rules for communication between devices",
                "A physical device only",
                "A type of operating system",
                "A spreadsheet macro"
              ],
              "answer": 0,
              "explanation": "Protocols define rules for data transfer, format, addressing and error handling.",
              "fact": "Protocol layering groups protocols into self-contained layers.",
              "page": 3
            },
            {
              "id": "23-1f",
              "text": "Which OS type is best for safety-critical processing within a predictable fraction of a second?",
              "options": [
                "Real-time operating system",
                "Batch OS only",
                "Single-user command line only",
                "Distributed OS only"
              ],
              "answer": 0,
              "explanation": "A real-time OS responds within guaranteed timing constraints.",
              "fact": "Real-time means timing is critical, not simply “fast”.",
              "page": 4
            },
            {
              "id": "23-1g",
              "text": "What happens when a higher-priority interrupt is accepted?",
              "options": [
                "The current context is saved and an ISR runs",
                "The CPU permanently stops",
                "The BIOS deletes the OS",
                "The keyboard is unplugged"
              ],
              "answer": 0,
              "explanation": "The OS saves the current state, runs the interrupt service routine, then restores the state.",
              "fact": "Interrupts are normally checked between FDE cycles and prioritised.",
              "page": 5
            }
          ]
        },
        {
          "id": "2023-q2",
          "title": "Q2 – Stack algorithms and data structures",
          "topic": "Data structures",
          "questions": [
            {
              "id": "23-2a",
              "text": "In Sundip’s stack algorithm, what action should input “E” perform?",
              "options": [
                "Pop one value, output it and end the program",
                "Push two values",
                "Sort the stack",
                "Clear RAM"
              ],
              "answer": 0,
              "explanation": "The table shows E pops one value, prints it and ends.",
              "fact": "Stacks are LIFO: the last item pushed is the first item popped.",
              "page": 7
            },
            {
              "id": "23-2b",
              "text": "What problem occurs if an algorithm tries to pop from an empty stack?",
              "options": [
                "Stack underflow",
                "Stack overflow",
                "Syntax analysis",
                "Deadlock only"
              ],
              "answer": 0,
              "explanation": "Popping when no items exist causes stack underflow.",
              "fact": "Overflow occurs when pushing to a full stack; underflow occurs when popping from an empty stack.",
              "page": 8
            },
            {
              "id": "23-2c",
              "text": "Which statement correctly compares stack and queue?",
              "options": [
                "Stack is LIFO; queue is FIFO",
                "Stack is FIFO; queue is LIFO",
                "Both can only remove random items",
                "Neither stores data"
              ],
              "answer": 0,
              "explanation": "A stack removes the last item added; a queue removes the first item added.",
              "fact": "Stack operations are push/pop; queue operations are enqueue/dequeue.",
              "page": 9
            },
            {
              "id": "23-2d",
              "text": "How is the second item in a linked list accessed?",
              "options": [
                "Follow the start pointer to the first node, then follow its next pointer",
                "Use direct index 1 in all cases",
                "Sort the list first",
                "Read the tail pointer only"
              ],
              "answer": 0,
              "explanation": "Linked lists are traversed by following pointers from node to node.",
              "fact": "Linked lists do not provide direct indexed access like arrays.",
              "page": 9
            },
            {
              "id": "23-2e",
              "text": "How is a tuple different from a list?",
              "options": [
                "A tuple is immutable",
                "A tuple always uses pointers",
                "A tuple must be sorted",
                "A tuple can only hold Boolean values"
              ],
              "answer": 0,
              "explanation": "A tuple cannot be changed after creation.",
              "fact": "Lists are mutable; tuples are immutable.",
              "page": 9
            }
          ]
        },
        {
          "id": "2023-q3",
          "title": "Q3 – Number representation and floating point",
          "topic": "Data representation",
          "questions": [
            {
              "id": "23-3a",
              "text": "What is denary 189 in hexadecimal?",
              "options": [
                "BD",
                "2AF",
                "12A",
                "E4"
              ],
              "answer": 0,
              "explanation": "189 converts to hexadecimal B D.",
              "fact": "This conversion appears often; 11 is B and 13 is D.",
              "page": 10
            },
            {
              "id": "23-3b",
              "text": "What is unsigned binary 1010101111 in hexadecimal?",
              "options": [
                "2AF",
                "BD",
                "ABF",
                "55F"
              ],
              "answer": 0,
              "explanation": "Pad left to 0010 1010 1111, giving 2AF.",
              "fact": "Group binary into four-bit nibbles to convert to hex.",
              "page": 10
            },
            {
              "id": "23-3c",
              "text": "Which is an advantage of two’s complement over sign and magnitude?",
              "options": [
                "Arithmetic is easier because addition/subtraction use the same hardware",
                "It cannot store negative numbers",
                "It has two versions of zero",
                "It uses no bits"
              ],
              "answer": 0,
              "explanation": "Two’s complement makes arithmetic simpler and has only one representation of zero.",
              "fact": "Sign and magnitude has separate +0 and -0 representations.",
              "page": 11
            },
            {
              "id": "23-3d",
              "text": "Increasing mantissa bits in floating point increases:",
              "options": [
                "Precision",
                "Range",
                "Network bandwidth",
                "Number of registers"
              ],
              "answer": 0,
              "explanation": "The mantissa controls precision/significant bits.",
              "fact": "Exponent controls range; mantissa controls precision.",
              "page": 13
            }
          ]
        },
        {
          "id": "2023-q4",
          "title": "Q4 – Assembly, multicore, encryption, HTML, copyright and 1NF",
          "topic": "Languages, security and web/database",
          "questions": [
            {
              "id": "23-4a",
              "text": "Which statement describes assembly language?",
              "options": [
                "It uses mnemonics and is close to machine code",
                "It is always platform-independent",
                "It never needs translation",
                "It uses only English paragraphs"
              ],
              "answer": 0,
              "explanation": "Assembly uses mnemonics such as LDA/JMP and is translated by an assembler.",
              "fact": "Assembly is low-level and usually processor-specific.",
              "page": 14
            },
            {
              "id": "23-4b",
              "text": "Why does a multicore processor not always make software faster?",
              "options": [
                "Some instructions cannot be run in parallel",
                "It removes cache memory",
                "It disables RAM",
                "It prevents scheduling"
              ],
              "answer": 0,
              "explanation": "If instructions depend on each other or software is not parallelised, extra cores may not help.",
              "fact": "Parallel processing depends on the program and task, not just hardware.",
              "page": 14
            },
            {
              "id": "23-4c",
              "text": "Which data is most suitable for hashing rather than encryption?",
              "options": [
                "Passwords that need verifying but not recovering",
                "A video that must be watched later",
                "A message that must be decrypted by a friend",
                "A database table that must be edited"
              ],
              "answer": 0,
              "explanation": "A password can be hashed and compared without storing the original.",
              "fact": "Hashing is one-way; encryption is reversible with a key.",
              "page": 15
            },
            {
              "id": "23-4d",
              "text": "In HTML, which attribute is used in an anchor tag to link to updates.html?",
              "options": [
                "href",
                "src",
                "class",
                "type"
              ],
              "answer": 0,
              "explanation": "The href attribute stores the destination URL/file for a hyperlink.",
              "fact": "Anchor tags use <a href=\"...\">text</a>.",
              "page": 16
            },
            {
              "id": "23-4e",
              "text": "Which field shows TblAccessLog is not in First Normal Form?",
              "options": [
                "DateAccessed contains multiple dates in one field",
                "Username is unique",
                "UserType is text",
                "The table has three columns"
              ],
              "answer": 0,
              "explanation": "Multiple dates in one field means the data is not atomic.",
              "fact": "1NF requires atomic values: one value per field, not repeating groups.",
              "page": 18
            }
          ]
        },
        {
          "id": "2023-q5",
          "title": "Q5 – Functions, files and algorithms",
          "topic": "Programming",
          "questions": [
            {
              "id": "23-5a",
              "text": "The function doCheck(3178) adds the digits and returns total MOD 10. What is returned?",
              "options": [
                "9",
                "19",
                "8",
                "0"
              ],
              "answer": 0,
              "explanation": "3+1+7+8=19, and 19 MOD 10 = 9.",
              "fact": "MOD returns the remainder after division.",
              "page": 20
            },
            {
              "id": "23-5b",
              "text": "Which step is needed to write values to storedvalues.txt?",
              "options": [
                "Open the file in write/append mode, write lines, then close it",
                "Open the file in read-only mode and never close it",
                "Use SQL DELETE",
                "Use a logic gate"
              ],
              "answer": 0,
              "explanation": "To write to a text file, open in write/append mode, write data, then close.",
              "fact": "File-handling algorithms should include opening, writing/reading, and closing the file.",
              "page": 21
            },
            {
              "id": "23-5c",
              "text": "Why should the input value and returned check value both be stored?",
              "options": [
                "The task requires storing both the original data and function result",
                "Only the result can ever be useful",
                "The function cannot return anything",
                "The file name is invalid"
              ],
              "answer": 0,
              "explanation": "The question requires both values, so both must be written to the file.",
              "fact": "Read the algorithm bullet points carefully; marks often map directly to them.",
              "page": 21
            }
          ]
        },
        {
          "id": "2023-q6",
          "title": "Q6 – Logic circuits, truth tables and Karnaugh maps",
          "topic": "Logic",
          "questions": [
            {
              "id": "23-6a",
              "text": "Which expression represents NOT(A OR B) XOR C?",
              "options": [
                "¬(A ∨ B) XOR C",
                "¬A ∨ B XOR C",
                "A AND B AND C",
                "A OR B OR C"
              ],
              "answer": 0,
              "explanation": "The NOT applies to the bracketed OR result, then XOR with C.",
              "fact": "Brackets matter in Boolean expressions.",
              "page": 22
            },
            {
              "id": "23-6b",
              "text": "For the expression ¬(A OR B) XOR C, what is P when A=0, B=0, C=0?",
              "options": [
                "1",
                "0",
                "C",
                "A"
              ],
              "answer": 0,
              "explanation": "A OR B is 0, NOT gives 1, and 1 XOR 0 gives 1.",
              "fact": "XOR outputs 1 when inputs are different.",
              "page": 22
            },
            {
              "id": "23-6c",
              "text": "What is the purpose of grouping 1s in a Karnaugh map?",
              "options": [
                "To find a simplified Boolean expression",
                "To encrypt the circuit",
                "To convert ASCII to Unicode",
                "To create a database key"
              ],
              "answer": 0,
              "explanation": "K-map groups adjacent 1s to eliminate changing variables and simplify logic.",
              "fact": "Groups should be powers of two and can wrap around map edges.",
              "page": 23
            }
          ]
        },
        {
          "id": "2023-q7",
          "title": "Q7 – RIPA evaluation",
          "topic": "Legal issues",
          "questions": [
            {
              "id": "23-7a",
              "text": "What is RIPA mainly concerned with?",
              "options": [
                "Investigatory powers such as surveillance and interception",
                "Copyright of photographs only",
                "Spreadsheet formulae",
                "CPU pipelining"
              ],
              "answer": 0,
              "explanation": "RIPA gives certain authorities investigatory powers under legal conditions.",
              "fact": "Evaluation questions need both benefits and concerns, such as public safety versus privacy.",
              "page": 23
            },
            {
              "id": "23-7b",
              "text": "Which is a possible drawback of RIPA powers?",
              "options": [
                "They may be seen as an intrusion on individual freedoms/privacy",
                "They increase CPU cache size",
                "They prevent all crime automatically",
                "They only apply to HTML"
              ],
              "answer": 0,
              "explanation": "Surveillance/interception powers can raise privacy and civil liberties concerns.",
              "fact": "Balance is essential in legal/ethical evaluation answers.",
              "page": 23
            }
          ]
        }
      ]
    },
    {
      "id": "2022",
      "title": "H446/01 June 2022",
      "pdf": "pdfs/H44601 Computer Systems June 2022.pdf",
      "groups": [
        {
          "id": "2022-q1",
          "title": "Q1 – Processor architecture, LMC, pipelining and RISC/CISC",
          "topic": "Processor architecture",
          "questions": [
            {
              "id": "22-1a",
              "text": "What is Von Neumann architecture?",
              "options": [
                "Data and instructions share the same memory and bus system",
                "Data and instructions always use separate memories",
                "It is only used in GPUs",
                "It has no registers"
              ],
              "answer": 0,
              "explanation": "Von Neumann architecture stores data and instructions together and uses the stored program concept.",
              "fact": "Von Neumann uses shared memory; Harvard uses separate instruction/data memory.",
              "page": 1
            },
            {
              "id": "22-1b",
              "text": "Which processor feature would typically improve performance?",
              "options": [
                "Higher clock speed",
                "Lower cache size",
                "Fewer cores",
                "Removing pipelining"
              ],
              "answer": 0,
              "explanation": "A faster clock speed can allow more cycles per second, increasing typical performance.",
              "fact": "CPU performance factors include clock speed, number of cores and cache size.",
              "page": 1
            },
            {
              "id": "22-1c",
              "text": "What is pipelining?",
              "options": [
                "Overlapping FDE stages for different instructions",
                "Using only one stage of FDE",
                "Storing instructions on a hard disk",
                "Converting binary to hex"
              ],
              "answer": 0,
              "explanation": "One instruction can be fetched while another is decoded/executed.",
              "fact": "Pipelining improves throughput rather than making each individual instruction simpler.",
              "page": 3
            },
            {
              "id": "22-1d",
              "text": "What does the Program Counter store?",
              "options": [
                "The address of the next instruction",
                "The result of every calculation",
                "The current user’s password",
                "The data bus width"
              ],
              "answer": 0,
              "explanation": "The PC holds the address of the next instruction to fetch; it may be incremented or changed by a branch.",
              "fact": "Do not confuse the PC with a count of how many instructions have executed.",
              "page": 4
            },
            {
              "id": "22-1e",
              "text": "Which register holds results of calculations from the ALU?",
              "options": [
                "Accumulator",
                "Program Counter",
                "MAR",
                "CIR"
              ],
              "answer": 0,
              "explanation": "The accumulator holds calculation results and input/output values in LMC-style architectures.",
              "fact": "The accumulator is central in LMC and CPU register questions.",
              "page": 4
            },
            {
              "id": "22-1f",
              "text": "Which is usually more suitable for mobile devices?",
              "options": [
                "RISC because it tends to be simpler and more power efficient",
                "CISC because it always uses less power",
                "CISC because it has no instructions",
                "Neither architecture can run mobile software"
              ],
              "answer": 0,
              "explanation": "RISC often uses simpler instructions and less complex hardware, helping power efficiency.",
              "fact": "RISC vs CISC evaluation should consider software compatibility, power, heat and battery life.",
              "page": 5
            }
          ]
        },
        {
          "id": "2022-q2",
          "title": "Q2 – Databases, SQL, ACID, copyright, compression and OOP",
          "topic": "Databases, compression and OOP",
          "questions": [
            {
              "id": "22-2a",
              "text": "What is a primary key?",
              "options": [
                "A field that uniquely identifies a record",
                "A repeated field with no purpose",
                "A field stored only in RAM",
                "A compressed video file"
              ],
              "answer": 0,
              "explanation": "A primary key uniquely identifies each record in a table.",
              "fact": "Foreign keys link to primary keys in another table.",
              "page": 7
            },
            {
              "id": "22-2b",
              "text": "In the Membership/Package database, PackageType in Membership is what?",
              "options": [
                "A foreign key",
                "A primary key of Membership",
                "A Boolean field",
                "A transaction log"
              ],
              "answer": 0,
              "explanation": "PackageType in Membership refers to PackageType in the Package table.",
              "fact": "A foreign key exists in the table that references another table.",
              "page": 7
            },
            {
              "id": "22-2c",
              "text": "Which SQL command retrieves Username and FirstName for customers who see adverts?",
              "options": [
                "SELECT",
                "DELETE",
                "INSERT",
                "UPDATE only"
              ],
              "answer": 0,
              "explanation": "SELECT retrieves fields from tables.",
              "fact": "This question requires joining Membership and Package to use the Adverts field correctly.",
              "page": 8
            },
            {
              "id": "22-2d",
              "text": "In ACID, what does durability mean?",
              "options": [
                "Committed transactions are not lost after a failure",
                "Two users always edit the same record at once",
                "Every field must be Boolean",
                "Queries must use nested SELECT"
              ],
              "answer": 0,
              "explanation": "Durability means once committed, data remains saved even after power/system failure.",
              "fact": "Durability is often achieved by writing committed transactions to non-volatile storage.",
              "page": 10
            },
            {
              "id": "22-2e",
              "text": "Why is record locking used for isolation?",
              "options": [
                "To stop another transaction changing the same record at the same time",
                "To compress video streams",
                "To convert ASCII to Unicode",
                "To delete primary keys"
              ],
              "answer": 0,
              "explanation": "Record locking prevents conflicting concurrent access to the same record.",
              "fact": "Isolation ensures concurrent transactions behave as if they occurred sequentially.",
              "page": 10
            },
            {
              "id": "22-2f",
              "text": "Which compression choice gives smaller streaming files but may reduce quality?",
              "options": [
                "Lossy",
                "Lossless",
                "Hashing",
                "Symmetric encryption"
              ],
              "answer": 0,
              "explanation": "Lossy permanently removes data, making files smaller but reducing quality.",
              "fact": "Lossless can recreate the original; lossy cannot.",
              "page": 11
            },
            {
              "id": "22-2g",
              "text": "What should the video class constructor initialise?",
              "options": [
                "Name from parameter, views to 0, star rating to 3",
                "All values to null only",
                "Only the star rating from a database",
                "The SQL primary key"
              ],
              "answer": 0,
              "explanation": "The constructor sets the initial attribute values for the new object.",
              "fact": "Constructor questions often require private attributes and correct initial values.",
              "page": 12
            }
          ]
        },
        {
          "id": "2022-q3",
          "title": "Q3 – Binary, hexadecimal and floating point",
          "topic": "Data representation",
          "questions": [
            {
              "id": "22-3a",
              "text": "What is hexadecimal B7E in binary?",
              "options": [
                "1011 0111 1110",
                "0111 1011 1110",
                "1011 1110 0111",
                "1110 0111 1011"
              ],
              "answer": 0,
              "explanation": "B=1011, 7=0111, E=1110.",
              "fact": "Convert each hex digit to one 4-bit nibble.",
              "page": 14
            },
            {
              "id": "22-3b",
              "text": "A sign-and-magnitude binary number starts with 1. What does that sign bit mean?",
              "options": [
                "The number is negative",
                "The number is positive",
                "The number is zero",
                "The number is hexadecimal"
              ],
              "answer": 0,
              "explanation": "In sign and magnitude, leading 1 usually indicates negative.",
              "fact": "Sign and magnitude uses one bit for sign and remaining bits for magnitude.",
              "page": 14
            },
            {
              "id": "22-3c",
              "text": "In floating point normalisation, why do positive normalised mantissas usually begin 01?",
              "options": [
                "To ensure the point is placed with no redundant leading bits",
                "To make every number negative",
                "To increase clock speed",
                "To show it is ASCII"
              ],
              "answer": 0,
              "explanation": "Normalisation removes unnecessary leading bits and maximises precision.",
              "fact": "For two’s complement mantissas, positive normalised values start 01 and negative start 10.",
              "page": 15
            },
            {
              "id": "22-3d",
              "text": "What does increasing exponent bits mainly increase?",
              "options": [
                "Range/magnitude",
                "Precision only",
                "Number of records",
                "Pixel colour depth only"
              ],
              "answer": 0,
              "explanation": "The exponent controls how far the binary point can move, increasing range.",
              "fact": "Mantissa = precision; exponent = range.",
              "page": 15
            }
          ]
        },
        {
          "id": "2022-q4",
          "title": "Q4 – AI bias and discrimination",
          "topic": "AI ethics",
          "questions": [
            {
              "id": "22-4a",
              "text": "What is artificial intelligence?",
              "options": [
                "Computer systems performing tasks normally requiring human intelligence",
                "A type of RAM",
                "A binary shift operation",
                "A spreadsheet package"
              ],
              "answer": 0,
              "explanation": "AI includes systems that perform tasks like learning, pattern recognition and decision-making.",
              "fact": "Machine learning is a subset of AI where systems improve from data/experience.",
              "page": 16
            },
            {
              "id": "22-4b",
              "text": "How can AI inherit bias?",
              "options": [
                "Through biased programmers or biased training data",
                "Only through CPU cache size",
                "Because all AI uses ASCII",
                "Through lossless compression"
              ],
              "answer": 0,
              "explanation": "Bias can enter via design choices, assumptions and unrepresentative training data.",
              "fact": "AI ethics answers should include examples and measures to reduce harm.",
              "page": 16
            },
            {
              "id": "22-4c",
              "text": "Which measure helps reduce bias in AI?",
              "options": [
                "Representative data, testing and human scrutiny",
                "Using only one programmer and no testing",
                "Removing all documentation",
                "Training only on one group"
              ],
              "answer": 0,
              "explanation": "Diverse datasets, testing and review help identify and reduce biased outcomes.",
              "fact": "Do not just define AI in a 9-mark discussion: apply and evaluate.",
              "page": 16
            }
          ]
        },
        {
          "id": "2022-q5",
          "title": "Q5 – Translators, compilation, ASCII/Unicode and methodologies",
          "topic": "Translators and development",
          "questions": [
            {
              "id": "22-5a",
              "text": "What is the purpose of a translator?",
              "options": [
                "Convert high-level or assembly code into machine code",
                "Convert RAM into ROM",
                "Send emails using SMTP",
                "Create a database primary key"
              ],
              "answer": 0,
              "explanation": "A translator converts source/assembly code into low-level machine code.",
              "fact": "Compilers, interpreters and assemblers are translators.",
              "page": 19
            },
            {
              "id": "22-5b",
              "text": "Which stage of compilation removes comments and whitespace?",
              "options": [
                "Lexical analysis",
                "Syntax analysis",
                "Code generation",
                "Code optimisation"
              ],
              "answer": 0,
              "explanation": "Lexical analysis removes comments/whitespace and tokenises source code.",
              "fact": "Syntax analysis checks grammar and can build an abstract syntax tree.",
              "page": 20
            },
            {
              "id": "22-5c",
              "text": "What is the purpose of code optimisation?",
              "options": [
                "To make code run faster or use fewer resources",
                "To deliberately add errors",
                "To convert text to Unicode",
                "To delete the executable"
              ],
              "answer": 0,
              "explanation": "Optimisation improves efficiency without changing program behaviour.",
              "fact": "Answer the purpose, not just the process.",
              "page": 20
            },
            {
              "id": "22-5d",
              "text": "Capital letters in ASCII have values 65 to 90. Which condition checks a capital letter?",
              "options": [
                "asc(c) >= 65 AND asc(c) <= 90",
                "asc(c) < 65 AND asc(c) > 90",
                "c == 65 OR 90",
                "asc(c) = “capital”"
              ],
              "answer": 0,
              "explanation": "The character is capital if its ASCII value is within 65–90 inclusive.",
              "fact": "Inclusive range checks need both lower and upper limits.",
              "page": 21
            },
            {
              "id": "22-5e",
              "text": "Which methodology focuses strongly on risk and repeated cycles?",
              "options": [
                "Spiral model",
                "Waterfall only",
                "Lexical analysis",
                "Binary search"
              ],
              "answer": 0,
              "explanation": "Spiral model has repeated cycles and explicit risk analysis.",
              "fact": "Waterfall is more linear; spiral is iterative and risk-focused.",
              "page": 22
            }
          ]
        },
        {
          "id": "2022-q6",
          "title": "Q6 – Scheduling and TCP/IP stack",
          "topic": "Operating systems and networks",
          "questions": [
            {
              "id": "22-6a",
              "text": "Why is first come first served suitable for a printer queue?",
              "options": [
                "Documents can be printed in the order they arrive",
                "It gives every process a time slice",
                "It always chooses shortest job",
                "It encrypts packets"
              ],
              "answer": 0,
              "explanation": "Printer jobs are naturally queued and processed in arrival order.",
              "fact": "FCFS is simple but can make later jobs wait behind long jobs.",
              "page": 24
            },
            {
              "id": "22-6b",
              "text": "Why is round robin suitable for processor scheduling?",
              "options": [
                "Each process gets a fixed time slice, helping multitasking feel fair",
                "It permanently runs the shortest job only",
                "It never suspends a process",
                "It only works for printers"
              ],
              "answer": 0,
              "explanation": "Round robin gives each process a time quantum then cycles to the next.",
              "fact": "Round robin prevents one process from monopolising the CPU.",
              "page": 24
            },
            {
              "id": "22-6c",
              "text": "At the application layer of TCP/IP, what happens for an encrypted messaging program?",
              "options": [
                "Application protocols and encryption-related processing prepare the message data",
                "MAC addresses are physically transmitted only",
                "The CPU performs a binary shift",
                "The BIOS loads the OS"
              ],
              "answer": 0,
              "explanation": "The application layer handles application-level protocols/data and may manage encryption functions.",
              "fact": "TCP/IP layers separate responsibilities for communication.",
              "page": 25
            },
            {
              "id": "22-6d",
              "text": "At the link/network interface layer, what happens?",
              "options": [
                "Frames are sent over the local physical network using hardware addresses",
                "SQL selects records",
                "The compiler creates object code",
                "The user writes pseudocode"
              ],
              "answer": 0,
              "explanation": "The link layer handles local network access and frame transmission.",
              "fact": "Layer names vary slightly, but the lowest TCP/IP layer handles local network transmission.",
              "page": 25
            }
          ]
        }
      ]
    }
  ]
};