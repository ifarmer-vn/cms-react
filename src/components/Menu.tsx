import React from 'react';

interface MenuItem {
    id: number;
    label: string;
    link: string;
    children?: MenuItem[];

}

const menuItems: MenuItem[] = [
    {id: 1, label: 'Home', link: '/'},
    {
        id: 2, label: 'Products', link: '#', children: [
            {id: 9, label: 'Categories', link: '/products/categories'},
            {id: 10, label: 'Products', link: '/products'},
            {id: 11, label: 'Variants', link: '/products/variants'},
        ]
    },
    {id: 3, label: 'Services', link: '/services'},
    {id: 4, label: 'Contact', link: '/contact'},
    {
        id: 5, label: 'Portfolio', link: '#', children: [
            {id: 6, label: 'Web Design', link: '/portfolio/web-design'},
            {id: 7, label: 'Graphics', link: '/portfolio/graphics'},
            {id: 8, label: 'Motion', link: '/portfolio/motion'},
        ]
    },
];

const AsideMenu: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-full">
            <div className="p-4">
                <h2 className="text-lg font-bold mb-4">Menu</h2>
                <ul className="space-y-2">
                    {menuItems.map(item => (
                        <li key={item.id}
                        >
                            <a

                                href={item.link}
                                className="block py-2 px-4 rounded hover:bg-gray-700"
                            >
                                {item.label}
                                {item.children && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75l3.75 3.75 3.75-3.75"/>
                                    </svg>
                                )}
                            </a>

                            {item.children && (
                                <ul className="ml-4 space-y-1">
                                    {item.children.map(child => (
                                        <li key={child.id}>
                                            <a
                                                href={child.link}
                                                className="block py-1 px-3 rounded hover:bg-gray-700"
                                            >
                                                {child.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default AsideMenu;