$(function () {
  'use strict'

  const data = [
    {
      "label": 'Self-Assesment',
      "icon": "images/SA.svg",
      "tabs": [
        {
          "label": "Dashboard",
          "title": "Dashboard sample title here",
          "text": "SA Call to Action"
        },
        {
          "label": "Option 1",
          "title": "Option 1 sample title here",
          "text": "Another Call to Action"
        },
        {
          "label": "Option 2",
          "title": "Option 2 sample title here",
          "text": "Last Call to Action"
        }
      ]
    },
    {
      "label": "Talent Fit for Recruitment",
      "icon": "images/TF.svg",
      "tabs": [
        {
          "label": "Dashboard",
          "title": "Talent Fit sample title here",
          "text": "TF longer Call to Action"
        },
        {
          "label": "Option 1",
          "title": "Option 1 sample title here",
          "text": "Another Call to Action"
        },
        {
          "label": "Option 2",
          "title": "Option 2 sample title here",
          "text": "One more Call to Action"
        },
        {
          "label": "Option 3",
          "title": "Option 3 sample title here",
          "text": "Last Call to Action"
        }
      ]
    },
    {
      "label": "Culture Analytics",
      "icon": "images/CA.svg",
      "tabs": [
        {
          "label": "Dashboard",
          "title": "Analytics sample title here",
          "text": "Call to Action"
        },
        {
          "label": "Option 1",
          "title": "Option 1 sample title here",
          "text": "Another Call to Action"
        },
        {
          "label": "Option 2",
          "title": "Option 2 sample title here",
          "text": "One more Call to Action"
        },
        {
          "label": "Option 3",
          "title": "Option 3 sample title here",
          "text": "Simple Call to Action"
        },
        {
          "label": "Option 4",
          "title": "Option 4 sample title here",
          "text": "Last Call to Action"
        }
      ]
    },
    {
      "label": "Engagement Suite",
      "icon": "images/ES.svg",
      "tabs": [
        {
          "label": "Dashboard",
          "title": "Dashboard sample title here",
          "text": "Call to Action"
        },
        {
          "label": "Option 1",
          "title": "Option 1 sample title here",
          "text": "One Call to Action"
        }
      ]
    },
    {
      "label": "Admin",
      "icon": "images/SA.svg",
      "disabled": true
    }
  ];

  $(window).on("load resize",function(e){
    const navHeight = $('.fixed-top').height();
    $('body').css('margin-top', navHeight);
  });

  const createTabs = function (element) {
    const tablist = document.querySelector('.nav-tabs');
    while (tablist.firstChild) {
      tablist.removeChild(tablist.firstChild);
    }

    if (!element.tabs) return;

    const tabs = element.tabs.map((tab) => {
      const item = document.createElement('li');
      item.setAttribute('class', 'nav-item');

      const link = document.createElement('a');
      link.innerHTML = tab.label;
      link.setAttribute('class', 'nav-link text-center');
      link.setAttribute('href', '#');
      link.setAttribute('role', 'tab');
      link.dataset.toggle = 'tab';
      link.dataset.title = tab.title;
      link.dataset.text = tab.text;

      $(link).on('click', function () {
        console.log('tab clicked');
        const { title, text } = this.dataset;
        document.getElementById('title').innerHTML = title;
        document.getElementById('cta').innerHTML = text;
      });

      item.appendChild(link);

      tablist.appendChild(item);
      return link;
    });

    return tabs;
  }

  const createDropdownItem = function (element) {
    const item = document.createElement('a');
    item.setAttribute('class', 'dropdown-item');
    item.setAttribute('href', '#');

    const icon = document.createElement('img');
    icon.src = 'assets/' + element.icon;
    icon.setAttribute('class', 'rounded-circle dropdown-icon');
    const label = document.createElement('span');
    label.setAttribute('class', 'dropdown-label');
    label.innerHTML = element.label;
    item.appendChild(icon);
    item.appendChild(label);

    if (element.disabled) item.classList.add('disabled');
    $(item).on('click', function () {
      if ($(this).hasClass('disabled')) return;
      const tabs = createTabs(element);
      $(tabs[0]).click();
      const selected = document.querySelector('.dropdown .selected');
      selected.innerHTML = '';
      selected.appendChild(icon.cloneNode(true));
      selected.appendChild(label.cloneNode(true));
    });

    return item;
  }

  $(document).ready(function () {
    const dropdown = document.getElementById('dropdown');
    const options = data.map((element) => {
      const item = createDropdownItem(element);
      
      dropdown.appendChild(item);
      return item;
    });
    $(options[0]).click();
  })

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    
  })
})
