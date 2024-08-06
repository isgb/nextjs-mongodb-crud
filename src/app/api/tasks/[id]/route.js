const { NextResponse } = require("next/server");

export function GET(request, {params}){
    console.log(params);
    return NextResponse.json({
        message: "obteniendo tarea..."
    })
}

export function DELETE(request, {params}){
    return NextResponse.json({
        message: `eliminando tarea ${params.id}`
    })
}

export function PUT(request, {params}){
    return NextResponse.json({
        message: `actualizando tarea ${params.id}`
    })
}