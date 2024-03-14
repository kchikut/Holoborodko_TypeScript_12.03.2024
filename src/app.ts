/*
Створити аналог класу Shelf, який не є класом-узагальненням і працює з двома типами Book та Magazine.
Модифікувати класс Shelf
Додати метод printTitles, який виводить у консоль заголовки об’єктів (title)
Додати метод find, який буде перегруженим, прийматиме id чи author і повертатиме об’єкт по id чи author*/
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}
interface Magazine {
    title: string;
    publisher: string;
}
enum Category {
    Software,
    Fiction,
    Science,
    History
}
class Shelf {
    private items: (Book | Magazine)[] = [];
    add(item: Book | Magazine): void {
        this.items.push(item);
    }
    getFirst(): Book | Magazine {
        return this.items[0];
    }
    printTitles(): void {
        this.items.forEach(item => {
            if ('title' in item) {
                console.log(item.title);
            }
        });
    }
    find(identifier: number | string): Book | Magazine | undefined {
        if (typeof identifier === 'number') {
            return this.items.find(item => 'id' in item && item.id === identifier);
        }
        else if (typeof identifier === 'string') {
            return this.items.find(item => 'author' in item && item.author === identifier);
        }
    }
}
