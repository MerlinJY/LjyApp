var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        let db = window.openDatabase('dbSalary', '1.0', 'Salary', 10485760);
        document.getElementById('text_Message').innerText = db.version;
    }
};
app.initialize();