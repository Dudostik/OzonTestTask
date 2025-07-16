document.addEventListener('DOMContentLoaded', function() {
    const progressArc = document.querySelector('.progress-arc');
    const progressContainer = document.querySelector('.progress-container');
    const progressSvg = document.querySelector('.progress');
    
    const valueInput = document.getElementById('value');
    const animateCheckbox = document.getElementById('animate');
    const hideCheckbox = document.getElementById('hide');
    
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    
    progressArc.style.strokeDasharray = circumference;
    progressArc.style.strokeDashoffset = circumference;
    
    function updateProgress(value) {
        const normalizedValue = Math.min(100, Math.max(0, value));
        const offset = circumference - (normalizedValue / 100) * circumference;
        
        progressArc.style.strokeDashoffset = offset;
    }
    
    valueInput.addEventListener('input', function() {
        const value = parseInt(this.value) || 0;
        updateProgress(value);
    });
    
    animateCheckbox.addEventListener('change', function() {
        if (this.checked) {
            progressSvg.classList.add('animated');
        } else {
            progressSvg.classList.remove('animated');
        }
    });
    
    hideCheckbox.addEventListener('change', function() {
        progressContainer.classList.toggle('hidden', this.checked);
    });
    
    updateProgress(0);
});

const valueInput = document.getElementById('value');

valueInput.addEventListener('input', function() {
    let value = parseInt(this.value) || 0;
    
    if (value > 100) {
        value = 100;
        this.value = 100;
    } else if (value < 0) {
        value = 0;
        this.value = 0;
    }
    
    updateProgress(value);
});

valueInput.addEventListener('keydown', function(e) {
    if (!/[0-9]|Backspace|Delete|Tab|ArrowLeft|ArrowRight/.test(e.key)) {
        e.preventDefault();
    }
});