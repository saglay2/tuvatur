
        // Массив туров с доступными датами
        const tours = [
            {
                id: 1,
                title: "Государственный природный заповедник Азас",
                description: "«Азас» — государственный природный заповедник в Тоджинском кожууне Республики Тыва. Отдых на базе расположенный на берегу озера Азас.",
                price: 8000,
                duration: "3 дня",
                image: "images/4766.jpg",
                availableDates: generateAvailableDates(5, 2) // 5 дат с интервалом 2 дня
            },
            {
                id: 2,
                title: "Тур в озеро Тере-Холь",
                description: "Знакомство с озером «Торе-Холь». Оно славится красивейшими закатами, золотистым песком и прозрачной водой. Также там находится знаменитая крепость Пор-Бажын.",
                price: 10000,
                duration: "3 дня",
                image: "images/i (1).webp",
                availableDates: generateAvailableDates(7, 1) // 7 дат с интервалом 1 день
            },
            {
                id: 3,
                title: "Дургенский водопад",
                description: "Природная достопримечательность в Тандинском районе Республики Тыва. Его образуют мощные потоки стремительной горной реки Дурген, которая протекает по Дургенскому каньону.",
                price: 2500,
                duration: "1 день",
                image: "images/kan.webp",
                availableDates: generateAvailableDates(4, 3) // 4 даты с интервалом 3 дня
            },
            {
                id: 4,
                title: "Экспедиция к Долине Царей",
                description: "Археологический тур к древним курганам скифов в Долине Царей. Условия тура: все включено.",
                price: 15000,
                duration: "3 дня",
                image: "images/valley-of-the-kings.jpg",
                availableDates: generateAvailableDates(3, 5) // 3 даты с интервалом 5 дней
            },
            {
                id: 5,
                title: "Тур на озеро Сут-Холь",
                description: "«Отдых на берегу Молочного озера»  — входят трансфер на всём пути, сопровождение проводника, предоставление палаток и кемпинговой мебели, трёхразовое питание.",
                price: 10000,
                duration: "4 дня",
                image: "images/сут.webp",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            },
            {
                id: 6,
                title: "Целебные источники",
                description: "В Республике Тыва есть как минеральные, так и пресные целебные источники (аржааны). Условия: проживание на базах или на тур базах возле источников, транспорт, питание.",
                price: "15000",
                duration: "3 дня",
                image: "images/arzhaan-choigan.jpg",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            },
            {
                id: 7,
                title: "Озеро Дус-Холь",
                description: "Вода и грязь озера Дус-Холь обладают лечебными свойствами. Их применяют для лечения различных заболеваний. Условия тура: все включено.",
                price: "6000",
                duration: "2 дня",
                image: "images/dus-khol-lake.jpg",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            },
            {
                id: 8,
                title: "Гора Монгун-Тайга",
                description: "Это высшая точка Восточной Сибири, расположенная в заповеднике «Убсунурская котловина». Экспедиционные туры с профессиональными гидами, так и маршруты для туристов, желающих пройти восхождение.",
                price: "10000",
                duration: "4 дня",
                image: "images/mongun-taiga.jpg",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            },
            {
                id: 9,
                title: "Кижи-кожээ",
                description: "Памятник около села Бижиктиг-Хая называют «Чингисхан». В народе его также называют «сымыраныыр кожээ» («изваяние, которому шепчут»). Считается, что если прошептать статуе в левое повреждённое ухо желание, оно обязательно сбудется. Условия: Все включено.",
                price: "3000",
                duration: "3 дня",
                image: "images/kizhi-kozhee.jpg",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            },
            {
                id: 10,
                title: "Монастырь Устуу-Хурээ",
                description: "Устуу-Хурээ — один из самых крупных и известных буддийских монастырей Тувы. Расположен в урочище Чайлаг-Алаак на правом берегу реки Чадан, в 7 км к юго-востоку от города Чадана, в 1,5 км южнее дороги, ведущей в село Бажын-Алаак. Условия: все включено.",
                price: "3000",
                duration: "3 дня",
                image: "images/ustuu-khuree-monastery.jpg",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            },
            {
                id: 11,
                title: "Гора Уттуг-Хая",
                description: "«Дырявая скала». Считается культовым местом для тувинцев и обладает необычайной энергетикой. Условия тура входит: программное питание, транспорт, гид, проживание.",
                price: "3000",
                duration: "2 дня",
                image: "images/mount-uttug-khaya.jpg",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            },
            {
                id: 12,
                title: "Мини тур по столице Республики Тыва город Кызыл",
                description: "Экскурсия по Кызылу с осмотром памятного знака «Центр Азии», скульптурных групп «Царская охота» и «Мой дом», места слияния рек Каа-Хем и Бий-Хем, которые образуют Енисей и т.д. В условия входит 2-3 местное размещение в гостинице, питание по программе тура, транспорт до конца тура, гид и входные билеты в музеи.",
                price: "30000",
                duration: "6 дней",
                image: "images/кызыл.webp",
                availableDates: generateAvailableDates(6, 2) // 6 дат с интервалом 2 дня
            }
        ];
        
        // Генерация доступных дат для туров
        function generateAvailableDates(count, dayInterval) {
            const dates = [];
            const today = new Date();
            
            // Начинаем с завтрашнего дня
            let currentDate = new Date(today);
            currentDate.setDate(currentDate.getDate() + 1);
            
            for (let i = 0; i < count; i++) {
                // Добавляем дату в массив
                dates.push(new Date(currentDate).toISOString().split('T')[0]);
                
                // Увеличиваем дату на указанный интервал
                currentDate.setDate(currentDate.getDate() + dayInterval);
            }
            
            return dates;
        }

        // DOM элементы
        const bookingForm = document.getElementById('booking-form');
        const tourSelect = document.getElementById('tour');
        const saveBtn = document.getElementById('save-btn');
        const dateInput = document.getElementById('date');
        const dateInfo = document.getElementById('date-info');
        const tourInfo = document.getElementById('tour-info');
        const tourDescription = document.getElementById('tour-description');
        const tourDuration = document.getElementById('tour-duration');
        const tourPrice = document.getElementById('tour-price');
        
        // Элементы модального окна
        const modal = document.getElementById('verification-modal');
        const closeBtn = document.querySelector('.close');
        const verifyBtn = document.getElementById('verify-btn');
        const resendLink = document.getElementById('resend-code');
        const timer = document.getElementById('timer');
        const codeInputs = document.querySelectorAll('.verification-code input');

        // Переменные для подтверждения
        let verificationCode = '';
        let timerInterval;
        let timeLeft = 60;
        let currentFormData = null;

        // Заполнение селекта турами
        function loadTourSelect() {
            tours.forEach(tour => {
                const option = document.createElement('option');
                option.value = tour.id;
                option.textContent = `${tour.title} - ${tour.price.toLocaleString('ru-RU')} руб. (${tour.duration})`;
                tourSelect.appendChild(option);
            });
        }

        // Обновление информации о туре
        function updateTourInfo(tourId) {
            const selectedTour = tours.find(tour => tour.id == tourId);
            
            if (selectedTour) {
                tourDescription.textContent = selectedTour.description;
                tourDuration.textContent = selectedTour.duration;
                tourPrice.textContent = `${selectedTour.price.toLocaleString('ru-RU')} руб.`;
                tourInfo.style.display = 'block';
                
                // Обновляем доступные даты для выбранного тура
                updateDateInput(selectedTour.availableDates);
            } else {
                tourInfo.style.display = 'none';
            }
        }

        // Обновление поля даты с учетом доступных дат
        function updateDateInput(availableDates) {
            // Устанавливаем минимальную дату (завтра)
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = tomorrow.toISOString().split('T')[0];
            
            // Очищаем предыдущее значение
            dateInput.value = '';
            dateInfo.textContent = '';
            
            // Добавляем обработчик изменения даты
            dateInput.onchange = function() {
                checkDateAvailability(this.value, availableDates);
            };
            
            // Показываем подсказку о доступных датах
            if (availableDates.length > 0) {
                const formattedDates = availableDates.map(date => {
                    return new Date(date).toLocaleDateString('ru-RU');
                }).join(', ');
                
                dateInfo.innerHTML = `Рекомендуемые даты: <strong>${formattedDates}</strong>`;
            }
        }

        // Проверка доступности выбранной даты
        function checkDateAvailability(selectedDate, availableDates) {
            if (availableDates.includes(selectedDate)) {
                dateInfo.innerHTML = '✅ Выбранная дата доступна';
                dateInfo.style.color = 'green';
            } else {
                dateInfo.innerHTML = '⚠️ Выбранная дата может быть недоступна. Пожалуйста, свяжитесь с нами для уточнения.';
                dateInfo.style.color = 'orange';
            }
        }

        // Валидация данных
        function validateFormData(data) {
            const errors = [];
            
            if (!data.name || data.name.length < 2) {
                errors.push('Имя должно содержать минимум 2 символа');
            }
            
            if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                errors.push('Введите корректный email');
            }
            
            if (!data.phone || !/\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}/.test(data.phone)) {
                errors.push('Введите телефон в формате +7 (XXX) XXX-XX-XX');
            }
            
            if (!data.tour) {
                errors.push('Выберите тур');
            }
            
            if (!data.date) {
                errors.push('Выберите дату тура');
            }
            
            if (!data.people || data.people < 1 || data.people > 20) {
                errors.push('Количество человек должно быть от 1 до 20');
            }
            
            return errors;
        }

        // Санитизация ввода
        function sanitizeInput(input) {
            return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        // Сохранение данных формы
        function saveFormData() {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                tour: document.getElementById('tour').value,
                date: document.getElementById('date').value,
                people: document.getElementById('people').value,
                message: document.getElementById('message').value
            };
            
            localStorage.setItem('bookingFormData', JSON.stringify(formData));
        }

        // Загрузка данных формы
        function loadFormData() {
            const savedData = localStorage.getItem('bookingFormData');
            if (savedData) {
                const formData = JSON.parse(savedData);
                Object.keys(formData).forEach(key => {
                    const element = document.getElementById(key);
                    if (element) element.value = formData[key];
                });
                
                // Обновляем информацию о туре, если он выбран
                if (formData.tour) {
                    updateTourInfo(formData.tour);
                }
            }
        }

        // Сохранение в файл
        function saveToFile(data) {
            const selectedTour = tours.find(tour => tour.id == data.tour);
            
            const fileContent = `
Бронирование тура - ТуваТур
============================

Данные клиента:
----------------
Имя: ${data.name}
Email: ${data.email}
Телефон: ${data.phone}

Информация о туре:
------------------
Тур: ${selectedTour ? selectedTour.title : 'Не выбран'}
Дата: ${data.date}
Количество человек: ${data.people}
Стоимость: ${selectedTour ? (selectedTour.price * data.people).toLocaleString('ru-RU') + ' руб.' : 'Не указана'}

Комментарий:
------------
${data.message || 'Нет комментариев'}

Дата бронирования: ${new Date().toLocaleString('ru-RU')}
            `;
            
            const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `Бронирование_ТуваТур_${new Date().toISOString().slice(0, 10)}.txt`;
            
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Генерация случайного кода подтверждения
        function generateVerificationCode() {
            return Math.floor(1000 + Math.random() * 9000).toString();
        }

        // Отправка кода подтверждения (имитация)
        function sendVerificationCode(email, phone) {
            verificationCode = generateVerificationCode();
            
            // В реальном приложении здесь был бы запрос к API для отправки email/SMS
            console.log(`Код подтверждения ${verificationCode} отправлен на ${email} и SMS на ${phone}`);
            
            // Запускаем таймер
            startTimer();
        }

        // Запуск таймера для повторной отправки кода
        function startTimer() {
            timeLeft = 60;
            updateTimerDisplay();
            
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                }
            }, 1000);
        }

        // Обновление отображения таймера
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                timer.textContent = 'Время истекло';
                resendLink.style.display = 'block';
            } else {
                resendLink.style.display = 'none';
            }
        }

        // Проверка введенного кода подтверждения
        function verifyCode() {
            const enteredCode = Array.from(codeInputs)
                .map(input => input.value)
                .join('');
            
            if (enteredCode === verificationCode) {
                // Код верный - завершаем бронирование
                completeBooking();
            } else {
                alert('Неверный код подтверждения. Пожалуйста, попробуйте еще раз.');
                // Сбрасываем ввод кода
                codeInputs.forEach(input => input.value = '');
                codeInputs[0].focus();
            }
        }

        function clearForm(){
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('tour').value = "";
            document.getElementById('date').value = "";
            document.getElementById('people').value = 0;
            updateTourInfo(null);
        };

        // Завершение бронирования после подтверждения
        function completeBooking() {
            // Закрываем модальное окно
            modal.style.display = 'none';
            
            // Сохраняем данные в файл
            saveToFile(currentFormData);
            
            // Очищаем форму и localStorage
            localStorage.removeItem('bookingFormData');
            bookingForm.reset();
            tourInfo.style.display = 'none';
            
            // Показываем сообщение об успехе
            alert(`Спасибо, ${currentFormData.name}!\nВаша бронь успешно подтверждена.\nМы отправили детали на ваш email и SMS.`);
            
            // Сбрасываем текущие данные
            currentFormData = null;
        }

        // Обработка отправки формы
        async function handleSubmit(event) {
            event.preventDefault();
            
            const formData = {
                name: sanitizeInput(document.getElementById('name').value.trim()),
                email: sanitizeInput(document.getElementById('email').value.trim()),
                phone: sanitizeInput(document.getElementById('phone').value.trim()),
                tour: document.getElementById('tour').value,
                date: document.getElementById('date').value,
                people: document.getElementById('people').value,
                message: sanitizeInput(document.getElementById('message').value.trim())
            };
            
            const errors = validateFormData(formData);
            if (errors.length > 0) {
                alert('Ошибки в форме:\n\n' + errors.join('\n'));
                return;
            }
            
            // Проверка доступности даты
            const selectedTour = tours.find(tour => tour.id == formData.tour);
            if (selectedTour && !selectedTour.availableDates.includes(formData.date)) {
                const confirmUnavailable = confirm('Выбранная дата может быть недоступна. Хотите продолжить бронирование? Мы свяжемся с вами для подтверждения.');
                if (!confirmUnavailable) return;
            }
            
            try {
                // Сохраняем данные формы для подтверждения
                currentFormData = formData;
                
                // Отправляем код подтверждения
                sendVerificationCode(formData.email, formData.phone);
                
                // Показываем модальное окно подтверждения
                modal.style.display = 'block';
                codeInputs[0].focus();
                
            } catch (error) {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
            }
        }

        // Инициализация
        document.addEventListener('DOMContentLoaded', () => {
            loadTourSelect();
            loadFormData();
            
            // Обработчик изменения выбранного тура
            tourSelect.addEventListener('change', function() {
                updateTourInfo(this.value);
                saveFormData();
            });
            
            // Автосохранение формы
            ['name', 'email', 'phone', 'date', 'people', 'message'].forEach(id => {
                document.getElementById(id).addEventListener('input', saveFormData);
            });
            
            // Маска для телефона
            document.getElementById('phone').addEventListener('input', function(e) {
                let x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                
                if (!x) return;
                
                // Форматируем номер, начиная с +7
                let formatted = '+7';
                if (x[2]) formatted += ' (' + x[2];
                if (x[3]) formatted += ') ' + x[3];
                if (x[4]) formatted += '-' + x[4];
                if (x[5]) formatted += '-' + x[5];
                
                this.value = formatted;
            });

            // Разрешаем удаление символов
            document.getElementById('phone').addEventListener('keydown', function(e) {
                if (e.key === 'Backspace') {
                    e.preventDefault();
                    let value = this.value.replace(/\D/g, '');
                    value = value.substring(0, value.length - 1);
                    
                    let x = value.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                    let formatted = '+7';
                    if (x[2]) formatted += ' (' + x[2];
                    if (x[3]) formatted += ') ' + x[3];
                    if (x[4]) formatted += '-' + x[4];
                    if (x[5]) formatted += '-' + x[5];
                    
                    this.value = formatted;
                }
            });

            // Сохранение в файл
            saveBtn.addEventListener('click', () => {
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    tour: document.getElementById('tour').value,
                    date: document.getElementById('date').value,
                    people: document.getElementById('people').value,
                    message: document.getElementById('message').value
                };
                
                if (!formData.name || !formData.phone) {
                    alert('Заполните хотя бы имя и телефон для сохранения');
                    return;
                }
                
                saveToFile(formData);
                clearForm();
            });
            
            // Обработчики модального окна подтверждения
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            verifyBtn.addEventListener('click', verifyCode);
            
            resendLink.addEventListener('click', () => {
                if (currentFormData) {
                    sendVerificationCode(currentFormData.email, currentFormData.phone);
                }
            });
            
            // Обработка ввода кода подтверждения с автоматическим переходом между полями
            codeInputs.forEach((input, index) => {
                input.addEventListener('input', () => {
                    if (input.value.length === 1) {
                        const nextId = input.getAttribute('data-next');
                        if (nextId) {
                            document.getElementById(nextId).focus();
                        }
                    }
                });
                
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && input.value.length === 0) {
                        const prevId = input.getAttribute('data-prev');
                        if (prevId) {
                            document.getElementById(prevId).focus();
                        }
                    }
                });
            });

            clearForm();
            
            bookingForm.addEventListener('submit', handleSubmit);
        });