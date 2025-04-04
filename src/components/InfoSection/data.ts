import { FaGlobe, FaLightbulb, FaUniversity } from "react-icons/fa";
import { IconType } from "react-icons";

export interface InfoItem {
    id: string;
    icon: IconType;
    title: string;
    description: string;
}

export const infoItems: InfoItem[] = [
    {
        id: "ted",
        icon: FaGlobe,
        title: "رویداد تد",
        description: `رویداد تد در حدود ۳۰ سال فعالیت مستمر با هدف گسترش ایده‌ها فعالیت می‌کند.
                    این مجموعه در روند این سال‌ها به دلیل توسعه فراوان، زیرمجموعه‌های زیادی تأسیس کرده است.
                    در این همایش‌ها از پیشوایان خرد و عمل جهان دعوت می‌شود تا ۱۸ دقیقه سخنرانی کنند.
                    تمامی سخنرانی‌ها در بستر یوتیوب بین‌المللی تد و دیگر فضاهای سوشال مدیا قابل مشاهده هستند.`,
    },
    {
        id: "tedx",
        icon: FaLightbulb,
        title: "رویداد تداِکس",
        description: `سال ۲۰۰۹ مؤسسه تد به علت استقبال زیادی که از تدتاک‌ها شد، رویدادی با عنوان تداکس راه‌اندازی نمود.
                    در این رویداد، علاقه‌مندان در هر کجای جهان می‌توانند پس از دریافت مجوز،
                    طبق استانداردهای تداکس کنفرانس‌های مستقل و بومی برگزار کنند.
                    از انواع تداکس‌ها می‌توان به تداکس‌های دانشگاهی، شهری و خیابانی اشاره کرد.`,
    },
    {
        id: "tedxUniversityOfTehran",
        icon: FaUniversity,
        title: "تداِکس دانشگاه تهران",
        description: `تداکس دانشگاه تهران یک رویداد مستقل است که با اخذ مجوز از تد (TED) برگزار می‌شود.  
هدف ما ایجاد بستری برای اشتراک ایده‌های نو، الهام‌بخش و تحول‌گرا  
در میان دانشگاهیان و نخبگان سراسر ایران است.   
 این رویداد فرصتی‌ست برای نمایان ساختن صداها و دیدگاه‌هایی که می‌توانند آینده‌ای روشن‌تر برای ایران رقم بزنند.`

    },
];
