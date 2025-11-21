import { db, storage } from '@/lib/firebase';
import {
    addDoc,
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    query as makeQuery,
    QueryConstraint,
    serverTimestamp,
    setDoc
} from 'firebase/firestore';
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytesResumable
} from 'firebase/storage';

export function getDocRef(id: string, col: string) {
    return doc(db, col, id);
}

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


export async function createDocument(col: string, data: DocumentData, id?: string) {
    data.created_at = serverTimestamp()
    if (id) {
        const ref = doc(db, col, id)
        await setDoc(ref, data)
    } else {
        const ref = collection(db, col)
        await addDoc(ref, data)
    }
}

export async function createDocumentInSubCol(col: string, colId: string, subCol: string, data: DocumentData, id?: string) {
    const parentDoc = doc(db, col, colId)
    data.created_at = serverTimestamp()
    if (id) {
        const ref = doc(collection(parentDoc, subCol), id)
        await setDoc(ref, data)
    } else {
        const ref = collection(parentDoc, subCol)
        await addDoc(ref, data)
    }
}

export async function uploadFile(file: File) {
    const fileName = `${Date.now()}_${file.name}`;
    const fileRef = storageRef(storage, `career/uploads/${fileName}`);
    const fileBytes = await file.arrayBuffer()
    const metadata = { contentType: file.type };
    const uploadTask = await uploadBytesResumable(fileRef, fileBytes, metadata);
    const url = await getDownloadURL(uploadTask.ref)
    return url
}
