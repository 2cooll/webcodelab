<?php

namespace LibrarySystem {

    // Trait untuk menampilkan informasi perpustakaan
    trait LibraryTrait {
        public function showInfo() {
            echo "Library: This is a system for managing books.<br>";
        }
    }

    // Abstract Class untuk item perpustakaan
    abstract class AbstractItem {
        protected $title;
        protected $author;

        public function __construct($title, $author) {
            $this->title = $title;
            $this->author = $author;
        }

        abstract public function getDetails();
    }

    // Class Book yang mewarisi AbstractItem dan menggunakan LibraryTrait
    class Book extends AbstractItem {
        use LibraryTrait;

        private $genre;

        public function __construct($title, $author, $genre) {
            parent::__construct($title, $author);
            $this->genre = $genre;
        }

        public function getDetails() {
            return "Title: $this->title, Author: $this->author, Genre: $this->genre";
        }

        // Magic Method __toString untuk menampilkan detail buku
        public function __toString() {
            return $this->getDetails();
        }
    }

    // Class Member untuk data anggota perpustakaan
    class Member {
        private $name;
        private $membershipId;

        public function __construct($name, $membershipId) {
            $this->name = $name;
            $this->membershipId = $membershipId;
        }

        public function borrowBook($book) {
            echo "$this->name borrowed: $book<br>";
        }
    }
}

// Penggunaan dari namespace LibrarySystem
namespace {
    use LibrarySystem\Book;
    use LibrarySystem\Member;

    // Membuat objek buku
    $book1 = new Book("1984", "George Orwell", "Dystopian");
    $book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic");

    // Menampilkan informasi perpustakaan
    $book1->showInfo();

    // Menampilkan detail buku
    echo $book1 . "<br>";
    echo $book2 . "<br>";

    // Membuat anggota perpustakaan
    $member = new Member("Alice", "M123");

    // Anggota meminjam buku
    $member->borrowBook($book1);
}

?>