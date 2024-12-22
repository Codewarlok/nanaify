<script lang="ts">
    const currentTime = new Date()
    const currentHour = currentTime.getHours()
    let greeting = ''

    if (currentHour < 12) {
        greeting = 'En hora buena'
    } else if (currentHour < 18) {
        greeting = 'Buenas Tardes'
    } else {
        greeting = 'Ahoy!'
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>