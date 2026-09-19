document.getElementById('apple').addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const review = document.getElementById('review').value;


    const reviewData = {
        name: name,
        email: email,
        review: review,
        timestamp: new Date().toISOString()
    };


    localStorage.setItem('savedReview', JSON.stringify(reviewData));

    alert('Thank You for your message!');

    
});


