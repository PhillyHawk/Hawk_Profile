$(document).ready(function() {
  // folders
  $('.finder-directory-container').on('click', function(e) {
    $('.finder-directory-container').removeClass('highlight');
    $('.finder-item-container').removeClass('highlight');
    $(this).addClass('highlight');
    $('.finder-section.finder-inner-items-list-container').addClass('finder-section-border');
    $('.finder-inner-items-list').addClass('hide');
    $('.finder-selected-item-wrapper').addClass('hide');
  });

  // folder outer directories
  $('.education-folder').on('click', function(e) {
    $('.education-items').removeClass('hide');
  });

  $('.experience-folder').on('click', function(e) {
    $('.experience-items').removeClass('hide');
  });

  $('.projects-folder').on('click', function(e) {
    $('.project-items').removeClass('hide');
  });

  $('.documents-folder').on('click', function(e) {
    $('.document-items').removeClass('hide');
  });

  // folder items
  $('.finder-item-container').on('click', function(e) {
    $('.finder-item-container').removeClass('highlight');
    $(this).addClass('highlight');
    $('.finder-selected-item-wrapper').addClass('hide');
  });

  // education
  $('.finder-item-container.palmer-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.palmer-selected-item').removeClass('hide');
  });

  $('.finder-item-container.chadron-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.chadron-selected-item').removeClass('hide');
  });

  $('.finder-item-container.msu-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.msu-selected-item').removeClass('hide');
  });

  $('.finder-item-container.upenn-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.upenn-selected-item').removeClass('hide');
  });

  // experience
  $('.finder-item-container.adobe-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.adobe-selected-item').removeClass('hide');
  });

  $('.finder-item-container.climate-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.climate-selected-item').removeClass('hide');
  });

  $('.finder-item-container.stowk-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.stowk-selected-item').removeClass('hide');
  });

  $('.finder-item-container.registria-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.registria-selected-item').removeClass('hide');
  });

  $('.finder-item-container.aaa-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.aaa-selected-item').removeClass('hide');
  });

  $('.finder-item-container.decal-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.decal-selected-item').removeClass('hide');
  });

  $('.finder-item-container.ffl-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.ffl-selected-item').removeClass('hide');
  });

  // projects
  $('.finder-item-container.muttropolitan-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.muttropolitan-selected-item').removeClass('hide');
  });

  $('.finder-item-container.hikeBuddy-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.hikeBuddy-selected-item').removeClass('hide');
  });

  $('.finder-item-container.roloDex-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.roloDex-selected-item').removeClass('hide');
  });

  $('.finder-item-container.gBooks-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.gBooks-selected-item').removeClass('hide');
  });

  $('.finder-item-container.news-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.news-selected-item').removeClass('hide');
  });

  $('.finder-item-container.csch-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.csch-selected-item').removeClass('hide');
  });

  // documents
  $('.finder-item-container.resume-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.resume-selected-item').removeClass('hide');
  });

  $('.finder-item-container.about-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.about-selected-item').removeClass('hide');
  });

  $('.finder-item-container.quotes-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.quotes-selected-item').removeClass('hide');
  });
});
