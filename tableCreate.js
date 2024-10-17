var createBtn = document.getElementById("createBtn")

    var toast = document.createElement("div")
    toast.setAttribute("id", "toast")

    var table = document.createElement("table")
    table.setAttribute("id", "table")
    document.body.appendChild(table)

    createBtn.addEventListener("click", () => {

        const newBtnHtml = document.createElement("button")
        newBtnHtml.innerHTML = `
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front text">Copy HTML</span>
        `
        document.body.appendChild(newBtnHtml)

        newBtnHtml.addEventListener("click", () => {
            navigator.clipboard.writeText('<table>' + table.innerHTML + '</table>')
            toast.textContent = "HTML code copied!"
            toast.style.backgroundColor = "green"
            document.body.appendChild(toast)
        })

        const newBtnCss = document.createElement("button")
        newBtnCss.innerHTML = `
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front text">Copy CSS</span>
        `
        document.body.appendChild(newBtnCss)

        newBtnCss.addEventListener("click", () => {
            navigator.clipboard.writeText(cssCode)
            toast.textContent = "Css code copied!"
            toast.style.backgroundColor = "green"
            document.body.appendChild(toast)
        })

        var caption = prompt("Caption: ")
        var columns = prompt("Columns: ")
        var rows = prompt("Rows: ")
        var width = prompt("Width: ")
        var height = prompt("Height: ")

        var borderThickness = prompt("Table border thickness: (px)")
        var borderType = prompt("Table border type: ")
        var borderColor = prompt("Table border color: ")

        var rowBorderThickness = prompt("Row border thickness: (px)")
        var rowBorderType = prompt("Row border type: ")
        var rowBorderColor = prompt("Row border color: ")

        var borderCollapse = prompt("Border-collapse: ...")

        table.style.width = `${width}px`
        table.style.height = `${height}px`
        table.style.border = `${borderThickness}px ${borderType} ${borderColor}`
        table.style.borderCollapse = borderCollapse

        let rowData = ''
        let columnData = ''
        for (let i = 0; i < columns; i++) {
            columnData += '<td></td>'
        }
        for (let i = 0; i < rows; i++) {
            rowData += '<tr>' + columnData + '</tr>'
        }

        var tr = document.querySelectorAll("tr")
        var td = document.querySelectorAll("td")

        let cssCode = `
        table{border: ${borderThickness}px ${borderType} ${borderColor};
              width: ${width}px;
              height: ${height}px;
              border-collapse: ${borderCollapse};
        }
        tr, td{
            border: ${rowBorderThickness}px ${rowBorderType} ${rowBorderColor};
        }
        `



        console.log(table.innerHTML = `
        <caption>${caption}</caption>
        ${rowData}
        `)

        console.log(cssCode)

        toast.textContent = "Your table has been created!"
        toast.style.backgroundColor = "green"
        document.body.appendChild(toast)
    })


//create style element and combine prompts with it => seeable table.innerHTML