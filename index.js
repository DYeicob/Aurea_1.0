import { createIcons, Search, Heart, ShoppingBag, Instagram, Pinterest, Linkedin, MessageSquare } from 'lucide';

document.addEventListener('DOMContentLoaded', () => {
    // --- Icon Replacement ---
    createIcons({
        icons: {
            Search,
            Heart,
            ShoppingBag,
            Instagram,
            Pinterest,
            Linkedin,
            MessageSquare
        }
    });

    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // --- Newsletter Popup ---
    const newsletterPopup = document.getElementById('newsletter-popup');
    const closePopupButton = document.getElementById('close-popup');

    // Show popup after 5 seconds
    setTimeout(() => {
        if (newsletterPopup) {
            newsletterPopup.classList.add('show');
            newsletterPopup.hidden = false;
        }
    }, 5000);

    // Close popup
    if(closePopupButton) {
        closePopupButton.addEventListener('click', () => {
            newsletterPopup.classList.remove('show');
            newsletterPopup.hidden = true;
        });
    }

    // --- Animate Product Cards on Scroll ---
    const productCards = document.querySelectorAll('.product-card');
    let delay = 0;
    productCards.forEach(card => {
        card.style.setProperty('--i', delay);
        delay++;
    });

});

