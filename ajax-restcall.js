 var self = this;
        self.tasksURI = 'http://localhost:5000/todo/api/v1.0/tasks';
        self.username = "miguel";
        self.password = "python";
        self.tasks = ko.observableArray();

        self.ajax = function(uri, method, data) {
            var request = {
                url: uri,
                type: method,
                contentType: "application/json",
                accepts: "application/json",
                cache: false,
                dataType: 'json',
                data: JSON.stringify(data),
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", 
                        "Basic " + btoa(self.username + ":" + self.password));
                },
                error: function(jqXHR) {
                    console.log("ajax error " + jqXHR.status);
                }
            };
            return $.ajax(request);
        }