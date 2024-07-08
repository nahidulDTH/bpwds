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
    "photo":"/data/photo/demoimg.png"
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