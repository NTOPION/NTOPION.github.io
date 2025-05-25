// Show the modal on page load
    window.onload = function() {
      document.getElementById('ageModal').style.display = 'flex';
    };

    // Handle age confirmation
    function confirmAge() {
      document.getElementById('ageModal').style.display = 'none';
      
    }

    // Handle age denial
    function denyAccess() {
      alert('Sorry, you must be 18 or older to access this site.');
      window.location.href = 'https://www.coca-cola.com/gr/el'; // Redirect to a safe page
    }

