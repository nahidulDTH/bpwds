const jsondata =  {
    "date":"__ 7 July 2024",
    "maintitle":"ভবানিপুর-পশ্চিমপাড়া-মসজিদ",
    "name":"ভবানীপুর পশ্চিমপাড়া জামে মসজিদ",
    "paragrap":"ভবানীপুর পশ্চিমপাড়া জামে মসজিদ আবস্তিত আছে ভ্যান গ্যারেজ থেকে প্রায় ৯০ মিটার এর দূরত্ব। মসজিদ এর দৈর্ঘ্যের কোন তথ্য গিটহাব এর সার্ভার সেভ নেই। মসজিদটি মাত্র ১ম নির্মাণ করা হয়েছে। <br><br>যারা ভবানীপুর পশ্চিমপাড়া জামে মসজিদ এর দায়িত্ব তে আছেন",
    "alllist":{

        "list1":"ইমাম - <a href='https://www.facebook.com/hemdadul.hauqe' target='_blank'>মোহাম্মাদ এমদাদুল হক</a> মোবাইল নাম্বার <a href='tel:+8801773795028' target='_blank'>(০১৭৭৩৭৯৫০২৮)</a>",
        "list2":"সভাপতি - মোহাম্মাদ আজিদ হোসেন <a href='tel:+8801758215375' target='_blank'> (০১৭৫৮২১৫৩৭৫)</a>",
        "list3":"ক্যাশিয়ার - মোহাম্মাদ মনির হোসেন মোবাইল নাম্বার <a href='tel:+8801718953884' target='_blank'>(০১৭১৮৯৫৩৮৮৪)</a> ও<br> মোহাম্মাদ আব্দুল কুদ্দুস মোবাইল নাম্বার <a href='tel:+8801715293509' target='_blank'>(০১৭১৫২৯৩৫০৯)</a>"
    },
    "photo":"/data/photo/demoimg.png",
    "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.3047491726691!2d89.42739426444216!3d24.045342698587266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe7d861ba2fa81%3A0xb908baee8c43b0e5!2z4Kat4Kas4Ka-4Kao4KeA4Kaq4KeB4KawIOCmquCmtuCnjeCmmuCmv-CmruCmquCmvuCmsOCmviDgppzgpr7gpq7gp4cg4Kau4Ka44Kac4Ka_4Kam!5e1!3m2!1sbn!2sbd!4v1720428052327!5m2!1sbn!2sbd"
    
};

   // Display data in HTML
   document.getElementById('date').textContent = jsondata.date;
   document.getElementById('maintitle').textContent = jsondata.maintitle;
   document.getElementById('name').textContent = jsondata.name;
   document.getElementById('paragrap').innerHTML = jsondata.paragrap;

   // Loop through alllist object and create list items dynamically
   const alllistElement = document.getElementById('alllist');
   for (const key in jsondata.alllist) {
       if (jsondata.alllist.hasOwnProperty(key)) {
           const listItem = document.createElement('li');
           listItem.innerHTML = jsondata.alllist[key];
           alllistElement.appendChild(listItem);
       }
   }

   // Display the photo
   document.getElementById('photo').src = jsondata.photo;
   document.getElementById('map').src = jsondata.map;