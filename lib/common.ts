import { db } from '@/lib/firebase';
import {
    addDoc,
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    query as makeQuery,
    QueryConstraint
} from 'firebase/firestore';


export async function readCollection(path: string, constraints?: QueryConstraint[]) {
    const ref = collection(db, path);
    const query = constraints?.length ? makeQuery(ref, ...constraints) : ref;
    const snap = await getDocs(query);
    return snap.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });
}

export async function readDocument(id: string, col: string) {
    const ref = doc(db, col, id);
    const snap = await getDoc(ref);
    return {
        id: snap.id,
        ...snap.data(),
    };
}


export async function createDocument(col: string, data: DocumentData) {
    const ref = await addDoc(collection(db, col), data)
    console.log(`new doc ${ref.id}`)
}
