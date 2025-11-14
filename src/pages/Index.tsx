import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Замена проводки",
      description: "Полная замена электропроводки в квартирах и домах с гарантией безопасности",
      icon: "Cable",
      price: "от 2500 ₽/точка"
    },
    {
      title: "Установка розеток и выключателей",
      description: "Монтаж и замена розеток, выключателей любой сложности",
      icon: "Plug",
      price: "от 500 ₽/шт"
    },
    {
      title: "Подключение люстр",
      description: "Профессиональная установка и подключение люстр, светильников",
      icon: "Lightbulb",
      price: "от 800 ₽"
    }
  ];

  const reviews = [
    {
      name: "Александр М.",
      text: "Отличная работа! Заменили всю проводку в квартире быстро и качественно.",
      rating: 5
    },
    {
      name: "Елена П.",
      text: "Профессиональный подход, все сделано аккуратно. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий К.",
      text: "Быстро приехали, установили люстру. Цена адекватная, работой доволен.",
      rating: 5
    }
  ];

  const faq = [
    {
      question: "Какие гарантии вы даете?",
      answer: "Предоставляем гарантию на все виды работ сроком от 12 месяцев. Используем только сертифицированные материалы."
    },
    {
      question: "Выезжаете ли вы в выходные?",
      answer: "Да, работаем без выходных. Возможен срочный выезд в течение 2 часов."
    },
    {
      question: "Какова стоимость выезда?",
      answer: "Выезд и диагностика бесплатны при условии выполнения работ. В противном случае - 500 рублей."
    },
    {
      question: "Какие способы оплаты принимаете?",
      answer: "Принимаем наличные, банковские карты и переводы на карту. Оплата после выполнения работ."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-secondary">ЭлектроМастер</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#price" className="text-foreground hover:text-primary transition-colors">Прайс</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <a href="tel:89029342417">
              <Button className="hidden md:flex">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                Профессиональные электромонтажные работы
              </h1>
              <p className="text-xl text-muted-foreground">
                Опыт более 10 лет. Гарантия качества. Работаем по всему городу без выходных.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:89029342417">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Icon name="Phone" size={20} className="mr-2" />
                    8 902 934-24-17
                  </Button>
                </a>
                <a href="mailto:dima.sobolev102210@mail.ru">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Написать
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/f407630d-f521-4867-a280-bfd875f95cd5/files/ac352803-b60c-4e11-a562-4aac115da491.jpg"
                alt="Профессиональный электрик"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Выполняем электромонтажные работы любой сложности</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены без скрытых платежей</p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Установка розетки/выключателя</span>
                  <span className="text-primary font-bold">от 500 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Замена проводки (за точку)</span>
                  <span className="text-primary font-bold">от 2500 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Подключение люстры</span>
                  <span className="text-primary font-bold">от 800 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Монтаж электрощита</span>
                  <span className="text-primary font-bold">от 3500 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Штробление стен (1 м.п.)</span>
                  <span className="text-primary font-bold">от 400 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Диагностика и выезд</span>
                  <span className="text-primary font-bold">Бесплатно*</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  * При выполнении работ. Консультация без работ - 500 ₽
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Нам доверяют сотни клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <a href="tel:89029342417" className="text-xl font-semibold hover:text-primary transition-colors">
                      8 902 934-24-17
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:dima.sobolev102210@mail.ru" className="text-xl font-semibold hover:text-primary transition-colors break-all">
                      dima.sobolev102210@mail.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Режим работы</p>
                    <p className="text-xl font-semibold">Ежедневно, 8:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={24} />
              <span className="text-xl font-bold">ЭлектроМастер</span>
            </div>
            <p className="text-center text-white/80">
              © 2024 ЭлектроМастер. Профессиональные электромонтажные работы.
            </p>
            <div className="flex gap-4">
              <a href="tel:89029342417" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="mailto:dima.sobolev102210@mail.ru" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
