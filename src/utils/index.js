/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";

function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
}

const slugify = function(text) {
  if (typeof text !== 'string') {
    return '';
  }
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
      .replace(/[^a-zA-Z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
  console.log()
      if (list[i].slug === obj.slug) {
          return i;
      }
  }

  return -1;
}
 const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll(".skillsInner___"),
    triggerBottom = (window.innerHeight / 5) * 5;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top,
      boxElement = box.getElementsByClassName("bar"),
      label = box.getElementsByClassName("label"),
      number = box.getElementsByClassName("number"),
      boxItem = boxElement[0],
      pWidth = box.getAttribute("data-value"),
      pColor = box.getAttribute("data-color");
    if (boxTop < triggerBottom) {
      boxItem.classList.add("open");
      label[0].classList.add("opened");
      number[0].style.right = `${100 - pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.backgroundColor =
        pColor;
    } else {
      boxItem.classList.remove("open");
      label[0].classList.remove("opened");
      number[0].style.right = `${120}%`;
    }
  });
};
 const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};
// change pagination and update pagination and content
 const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
 const  t = (key, data) => {
  const { t } = useTranslation();
  const translatedText = t(key);

  if (data) {
    // Map data to translated text
    return translatedText.replace(/{{\s*(.*?)\s*}}/g, (_, match) => data[match]);
  }
 }

 

export {flatDeep, slugify, containsObject , activeSkillProgress,getPagination,pagination , t};


