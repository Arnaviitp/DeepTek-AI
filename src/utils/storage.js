// Storage utility for managing localStorage data

const STORAGE_KEYS = {
    USER: 'deeptek_user',
    CONTACTS: 'deeptek_contacts',
    DEMOS: 'deeptek_demos',
    NEWSLETTER: 'deeptek_newsletter',
    JOB_APPLICATIONS: 'deeptek_job_applications',
    SUPPORT_TICKETS: 'deeptek_support_tickets',
};

// Generic storage functions
export const storage = {
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(`Error reading from localStorage: ${key}`, error);
            return null;
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Error writing to localStorage: ${key}`, error);
            return false;
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error(`Error removing from localStorage: ${key}`, error);
            return false;
        }
    },

    // Add item to an array in storage
    addToArray: (key, item) => {
        const existing = storage.get(key) || [];
        const newItem = {
            ...item,
            id: Date.now(),
            createdAt: new Date().toISOString(),
        };
        existing.push(newItem);
        storage.set(key, existing);
        return newItem;
    },
};

// User management
export const userStorage = {
    save: (userData) => storage.set(STORAGE_KEYS.USER, userData),
    get: () => storage.get(STORAGE_KEYS.USER),
    clear: () => storage.remove(STORAGE_KEYS.USER),
};

// Contact form submissions
export const contactStorage = {
    add: (data) => storage.addToArray(STORAGE_KEYS.CONTACTS, data),
    getAll: () => storage.get(STORAGE_KEYS.CONTACTS) || [],
};

// Demo requests
export const demoStorage = {
    add: (data) => storage.addToArray(STORAGE_KEYS.DEMOS, data),
    getAll: () => storage.get(STORAGE_KEYS.DEMOS) || [],
};

// Newsletter subscriptions
export const newsletterStorage = {
    add: (email) => {
        const existing = storage.get(STORAGE_KEYS.NEWSLETTER) || [];
        if (existing.includes(email)) {
            return { success: false, message: 'Already subscribed' };
        }
        existing.push(email);
        storage.set(STORAGE_KEYS.NEWSLETTER, existing);
        return { success: true, message: 'Subscribed successfully' };
    },
    getAll: () => storage.get(STORAGE_KEYS.NEWSLETTER) || [],
    isSubscribed: (email) => {
        const existing = storage.get(STORAGE_KEYS.NEWSLETTER) || [];
        return existing.includes(email);
    },
};

// Job applications
export const jobApplicationStorage = {
    add: (data) => storage.addToArray(STORAGE_KEYS.JOB_APPLICATIONS, data),
    getAll: () => storage.get(STORAGE_KEYS.JOB_APPLICATIONS) || [],
    getByJobId: (jobId) => {
        const all = storage.get(STORAGE_KEYS.JOB_APPLICATIONS) || [];
        return all.filter(app => app.jobId === jobId);
    },
};

// Support tickets
export const supportStorage = {
    add: (data) => storage.addToArray(STORAGE_KEYS.SUPPORT_TICKETS, data),
    getAll: () => storage.get(STORAGE_KEYS.SUPPORT_TICKETS) || [],
    updateStatus: (ticketId, status) => {
        const tickets = storage.get(STORAGE_KEYS.SUPPORT_TICKETS) || [];
        const updated = tickets.map(t =>
            t.id === ticketId ? { ...t, status } : t
        );
        storage.set(STORAGE_KEYS.SUPPORT_TICKETS, updated);
    },
};

// Form validation utilities
export const validate = {
    email: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    phone: (phone) => {
        const re = /^[\d\s\-+()]{10,}$/;
        return re.test(phone);
    },
    required: (value) => {
        return value && value.trim().length > 0;
    },
    minLength: (value, min) => {
        return value && value.length >= min;
    },
};

export default storage;
