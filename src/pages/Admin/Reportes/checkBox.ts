interface information {
    input1: String;
    input2: String;
    input3: String;
    input4: String;
}

interface data {
    nombre: String;
}

export const informacionDelPedido:information[] = [
    {
        input1: 'Afiliado',
        input2: 'Descuento',
        input3: 'Fecha del pedido',
        input4: 'Estado'
    },
    {
        input1: 'Divisa',
        input2: 'Tarifas de Polpopass',
        input3: 'Impuesto pagado',
        input4: 'Tipo de entrada'
    },
    {
        input1: 'Fecha de asistencia',
        input2: 'Tarifas pagadas',
        input3: 'Tipo de pedido',
        input4: 'Total pagado'
    },
    {
        input1: 'Metooo de entrega',
        input2: 'Ubicacion IP',
        input3: 'Cantidad',
        input4: 'Direccion de facturacion'
    },
    {
        input1: 'Procesamiento de pagos de polpo pass',
        input2: 'Nivel de precios',
        input3: 'Retenido',
        input4: 'Direccion de facturacion'
    }
]

export const informacionDelAsistente:information[] = [
    {
        input1: 'Número de asistente',
        input2: 'Número de código de barras',
        input3: 'Respuestas a preguntas personalizadas',
        input4: 'Equipo'
    },
    {
        input1: 'Prefijo',
        input2: 'Dirección de entrega',
        input3: 'Registro de pulseras',
        input4: 'Empresas'
    },
    {
        input1: 'Código secundario',
        input2: 'Fecha de nacimiento',
        input3: 'Ubicación del asiento',
        input4: 'Sitio web'
    },
    {
        input1: 'Direccion de trabajo',
        input2: 'Invitado de',
        input3: 'Telefono particular',
        input4: 'Correo electrónico'
    },
    {
        input1: 'input',
        input2: 'Blog',
        input3: 'Teléfono móvil',
        input4: 'Teléfono de trabajo'
    },
    {
        input1: 'Lista de invitados',
        input2: 'Sufijo',
        input3: 'Puesto',
        input4: 'Apellidos'
    },
    {
        input1: 'Genero',
        input2: 'Domicilio Particular',
        input3: 'Edad',
        input4: 'Telefono de casa'
    },
]

export const informacionDelComprador:data[] = [
    {
        nombre: 'Direccion del correo electronico del comprador'
    },
    {
        nombre: 'Nombre del comprador'
    },
    {
        nombre: 'Apellidos del comprador'
    },
    {
        nombre: 'Direcciones a efectos fiscales'
    },
    {
        nombre: 'Tipo de comprador'
    },
    {
        nombre: 'Numero de identificacion fiscal'
    },
    {
        nombre: 'Nombre / Empresa en recibo de impuestos'
    }
]

export const informacionDelEvento:data[] = [
    {
        nombre: 'ID de evento'
    },
    {
        nombre: 'Nombre del evento'
    },
    {
        nombre: 'ID del lugar'
    },
    {
        nombre: 'Nombre del lugar'
    },
]

export const gestionDeAcceso:data[] = [
    {
        nombre: 'Periodo de acreditacion'
    },
    {
        nombre: 'Nombre del dispositivo'
    },
    {
        nombre: 'Nombre del organizador'
    },
]