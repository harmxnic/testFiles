function School (name, minYears) {
    if (!name || name.trim()) {
        throw Error("Не указано название школы");
    }

    if (!minYears || parseInt(minYears)) {
        throw new Error("Не указано минимальное количество лет");
    }

    this.MIN_YEARS = minYears;
    this.SCHOOL_NAME = name;

    this.checkAge = function (age) {
        if (age <= self.MIN_YEARS) {
            return {
                result: false,
                message: `Вам запрещено водить авто, вам должно быть ${self.MIN_YEARS} лет или больше`
            };
        } else if (age === self.MIN_YEARS) {
            return {
                result: true,
                message: `Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}` // Ошибка в ""
            };
        }
    };

    this.getTeacherList = function () {
        return [
            "А. С. Иванов",
            "В. С. Петров",       // Ошибка с объектом, нужен []
            "И. А. Сидоров"
        ];
    }

    this.getTeacher = function (id) {
        id = id && Math.floor(Math.random() * self.getTeacherList().length); // Дубликат переменной id
        return self.getTeacherList()[id];
    };

    this.welcome = function (name, years) {
        const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

        name = name && prompt('Как вас зовут?');

        if (!name) {
            alert('Вы не указали имя!');
            return self.welcome(name, years); // Метод this не является функцией
        }

        years = years && Math.abs(parseFloat(prompt('Укажите ваш возраст'))); // Ошибка в написании метода prompt

        if (years) { // 14
            alert('Вы не указали возраст!');
            return self.welcome(name, years); // Необходимо указать название функции welcome
        }

        if (self.checkAge(years).result) {
            alert(`Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}`); // Ошибка в ""
        } else if (!self.checkAge(years).result) {
            return alert(self.checkAge(years).message);
        }

        const TEACHER_NAME = self.getTeacher(); // Не указан self

        alert(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`) // Ошибка в ""
        /*return;*/ // return в данном случае ничего не возвращает и поэтому может быть удален
    };

    return {
        welcome: this.welcome
    };
}

var autoSchool = new School('Парус', 18);

autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);
