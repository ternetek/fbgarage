/**
 * Datos mock del menú — reemplazar por contenido real o cargar desde API.
 */
window.MENU_DATA = {
  restaurant: {
    name: 'Garage & Grill',
    tagline: 'Route 66 vibes · Parrilla hasta tarde',
  },
  categories: [
    {
      id: 'entradas',
      title: 'Calentamos el motor',
      subtitle: 'Entradas para compartir o no',
      badge: 'Start',
      items: [
        {
          name: 'Alitas infernales',
          desc: '12 unidades · BBQ bourbon o buffalo · blue cheese opcional.',
          price: '$6.900',
          tags: ['picante opcional'],
        },
        {
          name: 'Papas traficantes',
          desc: 'Batatas y papas doradas · cheddar ahumado · panceta crispy.',
          price: '$5.400',
          tags: [],
        },
        {
          name: 'Tabla chorizo & bondiola',
          desc: 'Lingüita casera ahumada, bondiolita al carbón panes de campo.',
          price: '$8.800',
          tags: ['sharing'],
        },
      ],
    },
    {
      id: 'burger',
      title: 'Chains & burgers',
      subtitle: '200 g de falta que te hagas cargo',
      badge: 'Main',
      items: [
        {
          name: 'Iron Knuckle',
          desc: 'Doble carne smash · cheddar x2 · pepinillos · salsa garage.',
          price: '$9.200',
          tags: ['best seller'],
        },
        {
          name: 'Black Highway',
          desc: 'Carne · queso azul · cebolla caramelizada · pan negro activado.',
          price: '$9.800',
          tags: [],
        },
        {
          name: 'Sidecar veggie',
          desc: 'Medallón de lentejas y porto · guacamole · chipotle suave.',
          price: '$8.100',
          tags: ['veggie'],
        },
      ],
    },
    {
      id: 'parrilla',
      title: 'Carbón & humo',
      subtitle: 'Lo que sale del garage no vuelve entero',
      badge: 'Grill',
      items: [
        {
          name: 'Costillas Sturgis',
          desc: '1/2 rack · glaseadas 8 horas · coleslaw y papas horno.',
          price: '$12.500',
          tags: ['low & slow'],
        },
        {
          name: 'Bife Rider 400g',
          desc: 'Ojo de bife nacional · chimichurri de motor · provoleta opcional.',
          price: '$15.900',
          tags: [],
        },
        {
          name: 'Parrillada clubhouse',
          desc: '2 personas · chorizo bondiola colita vacío · verduras grilled.',
          price: '$24.000',
          tags: ['para 2'],
        },
      ],
    },
    {
      id: 'bebidas',
      title: 'Tank full',
      subtitle: 'Birras, cócteles rock y refrescos',
      badge: 'Bar',
      items: [
        {
          name: 'IPA Garage 473 ml',
          desc: 'Lúpulo citrico · tirada bien fría desde la barra de chapa.',
          price: '$3.600',
          tags: [],
        },
        {
          name: 'Shot Whiskey alley',
          desc: 'Selección bourbon o rye · hielito único tipo gemas.',
          price: '$2.200',
          tags: [],
        },
        {
          name: 'Lemon rusty',
          desc: 'Gin infusionado · pomelo rosado · toque de pimienta rosa.',
          price: '$4.100',
          tags: [],
        },
        {
          name: 'Gaseosa / agua mineral',
          desc: 'Líneas clásicas · hielos en vaso alto grabado Garage.',
          price: '$1.400',
          tags: [],
        },
      ],
    },
    {
      id: 'postres',
      title: 'Último tramo',
      subtitle: 'Dulces que cierran la vuelta',
      badge: 'Sweet',
      items: [
        {
          name: 'Brownie burnout',
          desc: 'Chocolate 70 % · nueces caramelizadas · helado vainilla bourbon.',
          price: '$4.900',
          tags: [],
        },
        {
          name: 'Cheesecake asfalto',
          desc: 'Base oreo molida · salsa de moras salvajes.',
          price: '$4.400',
          tags: [],
        },
      ],
    },
  ],
};
