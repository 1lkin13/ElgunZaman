export const languages = {
  az: "Azərbaycan",
  en: "English",
  ru: "Русский",
}

export const galleryCategories = {
  az: {
    all: "Hamısı",
    wedding: "Toy",
    portrait: "Portret",
    event: "Hadisə",
    nature: "Təbiət",
    family: "Ailə",
    architecture: "Memarlıq",
    fashion: "Moda",
    street: "Küçə",
  },
  en: {
    all: "All",
    wedding: "Wedding",
    portrait: "Portrait",
    event: "Event",
    nature: "Nature",
    family: "Family",
    architecture: "Architecture",
    fashion: "Fashion",
    street: "Street",
  },
  ru: {
    all: "Все",
    wedding: "Свадьба",
    portrait: "Портрет",
    event: "Событие",
    nature: "Природа",
    family: "Семья",
    architecture: "Архитектура",
    fashion: "Мода",
    street: "Уличная",
  },
}

export const portfolioData = {
  az: {
    // Hero Section
    hero: {
      title: "Elgün Zaman",
      subtitle: "İşıq mənim boyamdır, dünya mənim kətanımdır",
      cta: "Qalereya",
    },

    // Navigation
    nav: {
      gallery: "Qalereya",
      testimonials: "Rəylər",
      about: "Haqqımda",
      contact: "Əlaqə",
    },

    // Gallery Section
    gallery: {
      title: "Əsərlərim",
      subtitle: "Seçilmiş fotoqraflar",
      viewMore: "Daha çox",
      instagramLink: "Instagram-da daha çox",
    },

    // Testimonials Section
    testimonials: {
      title: "Müştəri Rəyləri",
      subtitle: "Məmnun müştərilərimizin fikirləri",
      clients: [
        {
          name: "Ayşə Məmmədova",
          text: "Möhtəşəm işçilik! Toy fotoqraflarımız çox gözəl oldu.",
          role: "Gəlin",
        },
        {
          name: "Rəşad Əliyev",
          text: "Peşəkar yanaşma və yaradıcı baxış. Tövsiyə edirəm!",
          role: "Biznes sahibi",
        },
        {
          name: "Leyla Həsənova",
          text: "Portret çəkilişi əla keçdi. Çox təşəkkür edirəm!",
          role: "Model",
        },
      ],
    },

    // About Section
    about: {
      title: "Haqqımda",
      subtitle: "Mənim hekayəm",
      bio: "10 ildən çox təcrübəsi olan peşəkar fotoqrafam. Toy, portret və hadisə fotoqrafiyası sahəsində ixtisaslaşmışam. Hər kadrda emosiya və gözəllik axtarıram.",
      education: "Fotoqrafiya üzrə təhsil",
      experience: "10+ il təcrübə",
      specialty: "Toy və portret fotoqrafiyası",
      journey: "Mənim Yolum",
      skillsTitle: "Fotoqrafiya Bacarıqları",
      labels: {
        certification: "Peşəkar Sertifikat",
        industry: "Sahədə",
        expertise: "İxtisas Sahələri",
      },
      timeline: [
        {
          year: "2014",
          title: "Fotoqrafiya Səyahətinə Başladım",
          description: "Fotoqrafiyaya həvəs layihəsi kimi başladım",
        },
        {
          year: "2016",
          title: "İlk Peşəkar Çəkiliş",
          description: "İlk ödənişli toy fotoqrafiyası seansını tamamladım",
        },
        {
          year: "2018",
          title: "Fotoqrafiya Studiyası Açıldı",
          description: "Peşəkar fotoqrafiya studiyası qurdum",
        },
        {
          year: "2020",
          title: "Mükafat Tanınması",
          description: "Regional fotoqrafiya mükəmməllik mükafatı aldım",
        },
        {
          year: "2022",
          title: "Beynəlxalq Sərgiler",
          description: "Bir neçə beynəlxalq fotoqrafiya sərgisində iştirak etdim",
        },
        {
          year: "2024",
          title: "Usta Fotoqraf",
          description: "Usta fotoqraf sertifikatı əldə etdim",
        },
      ],
      skills: [
        { name: "Toy Fotoqrafiyası", level: 95 },
        { name: "Portret Fotoqrafiyası", level: 90 },
        { name: "Hadisə Fotoqrafiyası", level: 88 },
        { name: "Foto Redaktə", level: 92 },
      ],
    },

    // Contact Section
    contact: {
      title: "Əlaqə",
      subtitle: "Gəlin birlikdə yaradaq",
      form: {
        name: "Adınız",
        email: "E-poçt ünvanınız",
        message: "Mesajınız",
        send: "Göndər",
        success: "Mesajınız göndərildi!",
        error: "Xəta baş verdi. Yenidən cəhd edin.",
      },
      info: {
        phone: "Telefon",
        email: "E-poçt",
        location: "Ünvan",
      },
    },
  },

  en: {
    // Hero Section
    hero: {
      title: "Photographer",
      subtitle: "Light is my paint, the world is my canvas",
      cta: "View Gallery",
    },

    // Navigation
    nav: {
      gallery: "Gallery",
      testimonials: "Testimonials",
      about: "About",
      contact: "Contact",
    },

    // Gallery Section
    gallery: {
      title: "My Work",
      subtitle: "Selected photographs",
      viewMore: "View More",
      instagramLink: "More on Instagram",
    },

    // Testimonials Section
    testimonials: {
      title: "Client Reviews",
      subtitle: "What our satisfied clients say",
      clients: [
        {
          name: "Sarah Johnson",
          text: "Amazing work! Our wedding photos turned out beautifully.",
          role: "Bride",
        },
        {
          name: "Michael Davis",
          text: "Professional approach and creative vision. Highly recommend!",
          role: "Business Owner",
        },
        {
          name: "Emma Wilson",
          text: "The portrait session was excellent. Thank you so much!",
          role: "Model",
        },
      ],
    },

    // About Section
    about: {
      title: "About Me",
      subtitle: "My story",
      bio: "I'm a professional photographer with over 10 years of experience. I specialize in wedding, portrait, and event photography. I seek emotion and beauty in every frame.",
      education: "Photography Education",
      experience: "10+ years experience",
      specialty: "Wedding & Portrait Photography",
      journey: "My Journey",
      skillsTitle: "Photography Skills",
      labels: {
        certification: "Professional Certification",
        industry: "In the Industry",
        expertise: "Areas of Expertise",
      },
      timeline: [
        {
          year: "2014",
          title: "Started Photography Journey",
          description: "Began exploring photography as a passion project",
        },
        {
          year: "2016",
          title: "First Professional Shoot",
          description: "Completed first paid wedding photography session",
        },
        {
          year: "2018",
          title: "Photography Studio Opened",
          description: "Established professional photography studio",
        },
        {
          year: "2020",
          title: "Award Recognition",
          description: "Received regional photography excellence award",
        },
        {
          year: "2022",
          title: "International Exhibitions",
          description: "Featured in multiple international photography exhibitions",
        },
        {
          year: "2024",
          title: "Master Photographer",
          description: "Achieved master photographer certification",
        },
      ],
      skills: [
        { name: "Wedding Photography", level: 95 },
        { name: "Portrait Photography", level: 90 },
        { name: "Event Photography", level: 88 },
        { name: "Photo Editing", level: 92 },
      ],
    },

    // Contact Section
    contact: {
      title: "Contact",
      subtitle: "Let's create together",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send",
        success: "Message sent successfully!",
        error: "An error occurred. Please try again.",
      },
      info: {
        phone: "Phone",
        email: "Email",
        location: "Location",
      },
    },
  },

  ru: {
    // Hero Section
    hero: {
      title: "Фотограф",
      subtitle: "Свет - моя краска, мир - мой холст",
      cta: "Галерея",
    },

    // Navigation
    nav: {
      gallery: "Галерея",
      testimonials: "Отзывы",
      about: "Обо мне",
      contact: "Контакты",
    },

    // Gallery Section
    gallery: {
      title: "Мои работы",
      subtitle: "Избранные фотографии",
      viewMore: "Смотреть больше",
      instagramLink: "Больше в Instagram",
    },

    // Testimonials Section
    testimonials: {
      title: "Отзывы клиентов",
      subtitle: "Что говорят наши довольные клиенты",
      clients: [
        {
          name: "Анна Петрова",
          text: "Потрясающая работа! Наши свадебные фото получились прекрасными.",
          role: "Невеста",
        },
        {
          name: "Дмитрий Иванов",
          text: "Профессиональный подход и творческое видение. Рекомендую!",
          role: "Владелец бизнеса",
        },
        {
          name: "Елена Смирнова",
          text: "Портретная съемка прошла отлично. Большое спасибо!",
          role: "Модель",
        },
      ],
    },

    // About Section
    about: {
      title: "Обо мне",
      subtitle: "Моя история",
      bio: "Я профессиональный фотограф с более чем 10-летним опытом. Специализируюсь на свадебной, портретной и событийной фотографии. Ищу эмоции и красоту в каждом кадре.",
      education: "Образование в фотографии",
      experience: "Опыт 10+ лет",
      specialty: "Свадебная и портретная фотография",
      journey: "Мой Путь",
      skillsTitle: "Навыки Фотографии",
      labels: {
        certification: "Профессиональная Сертификация",
        industry: "В Индустрии",
        expertise: "Области Экспертизы",
      },
      timeline: [
        {
          year: "2014",
          title: "Начал Путь в Фотографии",
          description: "Начал изучать фотографию как увлечение",
        },
        {
          year: "2016",
          title: "Первая Профессиональная Съемка",
          description: "Завершил первую платную свадебную фотосессию",
        },
        {
          year: "2018",
          title: "Открытие Фотостудии",
          description: "Основал профессиональную фотостудию",
        },
        {
          year: "2020",
          title: "Признание Наград",
          description: "Получил региональную награду за превосходство в фотографии",
        },
        {
          year: "2022",
          title: "Международные Выставки",
          description: "Участвовал в нескольких международных фотовыставках",
        },
        {
          year: "2024",
          title: "Мастер Фотограф",
          description: "Получил сертификат мастера фотографии",
        },
      ],
      skills: [
        { name: "Свадебная Фотография", level: 95 },
        { name: "Портретная Фотография", level: 90 },
        { name: "Событийная Фотография", level: 88 },
        { name: "Обработка Фото", level: 92 },
      ],
    },

    // Contact Section
    contact: {
      title: "Контакты",
      subtitle: "Давайте творить вместе",
      form: {
        name: "Ваше имя",
        email: "Ваш email",
        message: "Ваше сообщение",
        send: "Отправить",
        success: "Сообщение отправлено успешно!",
        error: "Произошла ошибка. Попробуйте снова.",
      },
      info: {
        phone: "Телефон",
        email: "Email",
        location: "Адрес",
      },
    },
  },
}
