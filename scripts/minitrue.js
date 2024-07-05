// -*- coding: utf-8-unix -*-
window.onload = () => {
    // Banner
    document.querySelectorAll("k-think-banner")[0]?.style.setProperty('display', 'none', 'important');
    // Comments
    document.querySelectorAll('[data-comment-card="true"]')?.forEach((kThinkCommentCard) => {
        const showComment = () => {
            kThinkCommentCard.querySelector('[data-comment-avator]')?.style.setProperty('opacity', '1.0', 'important');
            kThinkCommentCard.querySelector('[data-comment-name]')?.style.setProperty('opacity', '1.0', 'important');
            kThinkCommentCard.querySelector('[data-comment-description]')?.style.setProperty('opacity', '1.0', 'important');
            kThinkCommentCard.querySelector('[data-option-container]')?.style.setProperty('opacity', '1.0', 'important');
            kThinkCommentCard.querySelector('[data-comment-body="true"]')?.style.setProperty('display', 'block', 'important');
            kThinkCommentCard.querySelector('[data-comment-footer="true"]')?.style.setProperty('display', 'block', 'important');
        };
        const hideComment = () => {
            kThinkCommentCard.querySelector('[data-comment-avator]')?.style.setProperty('opacity', '0.5', 'important');
            kThinkCommentCard.querySelector('[data-comment-name]')?.style.setProperty('opacity', '0.5', 'important');
            kThinkCommentCard.querySelector('[data-comment-description]')?.style.setProperty('opacity', '0.5', 'important');
            kThinkCommentCard.querySelector('[data-option-container]')?.style.setProperty('opacity', '0.5', 'important');
            kThinkCommentCard.querySelector('[data-comment-body="true"]')?.style.setProperty('display', 'none', 'important');
            kThinkCommentCard.querySelector('[data-comment-footer="true"]')?.style.setProperty('display', 'none', 'important');
        };
        hideComment();
        const kThinkCommentHeader = kThinkCommentCard.querySelector('[data-comment-author-id]');
        if (kThinkCommentHeader) {
            const button = document.createElement('button');
            button.innerHTML = "Show";
            button.addEventListener("click", (event) => {
                if (event.target.innerHTML === "Show") {
                    showComment();
                    event.target.innerHTML = "Hide";
                } else {
                    hideComment();
                    event.target.innerHTML = "Show";
                }
            });
            kThinkCommentHeader.appendChild(button);
        }
    });
}
