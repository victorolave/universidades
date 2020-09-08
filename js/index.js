var universidades = [];

const getValue = () => {
    var universityName = document.getElementById("name").value;
    console.log(universityName);
}

const setTable = (data) => {

    var table = document.getElementById('data');

    table.innerHTML = data.map(d => {
        return (
            "<tr><th scope='row'>" + d[14] + "</th><td>" + d[25] + "</td><td>" + d[12] + "</td><td><a class='btn btn-primary'>Detalles</a></td></tr>"
        )
    });

}

const getData = () => {

    fetch('db/Universidades.json')
        .then(response => response.json())
        .then(u => {
            universidades = u.data;
            setTable(universidades);
        });
}

const globalSearch = () => {
    
    let tmp = [];
    
    let university = document.getElementById('name').value.toUpperCase();
    let city = document.getElementById('city').value;
    let group = document.getElementById('group').value;

    if (university && city && group)
    {
        universidades.forEach(element => {
            if (element[25] == university && element[14] == city && element[12] == group)
            {
                tmp.push(element);
            }
        })
    }
    else if (university && city && !group) 
    {
        universidades.forEach(element => {
            if (element[25] == university && element[14] == city)
            {
                tmp.push(element);
            }
        })
    }
    else if (university && group && !city)
    {
        universidades.forEach(element => {
            if (element[25] == university && element[12] == group)
            {
                tmp.push(element);
            }
        })
    }
    else if (city && group && !university)
    {
        universidades.forEach(element => {
            if (element[14] == city && element[12] == group)
            {
                tmp.push(element);
            }
        })
    }
    else if (city && !group && !university)
    {
        universidades.forEach(element => {
            if (element[14] == city)
            {
                tmp.push(element);
            }
        })
    }
    else if (!city && group && !university)
    {
        universidades.forEach(element => {
            if (element[12] == group)
            {
                tmp.push(element);
            }
        });
    }
    else if (!city && !group && university)
    {
        universidades.forEach(element => {
            if (element[25] == university)
            {
                tmp.push(element);
            }
        });
    }

    setTable(tmp);

}

const searchByCity = () => {

    let tmp = [];
    let name = document.getElementById('city').value;

    universidades.forEach(element => {

        if (element[14] == name) {
            tmp.push(element);
        }

    });

    setTable(tmp);

}

const searchByGroup = () => {
    let tmp = [];
    let name = document.getElementById('group').value;

    universidades.forEach(element => {

        if (element[12] == name) {
            tmp.push(element);
        }

    });

    setTable(tmp);
}

const searchByName = () => {

    let tmp = [];
    let name = document.getElementById('name').value;

    universidades.forEach(element => {
        if (element[25] == name) {
            tmp.push(element);
        }
    });

    setTable(tmp);

}
