// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Banners da Home documents */
interface BannersDaHomeDocumentData {
    /**
     * Banners field in *Banners da Home*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    banners: prismicT.GroupField<Simplify<BannersDaHomeDocumentDataBannersItem>>;
}
/**
 * Item in Banners da Home → Banners
 *
 */
export interface BannersDaHomeDocumentDataBannersItem {
    /**
     * Banner field in *Banners da Home → Banners*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].banner
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * Link field in *Banners da Home → Banners*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Descrição field in *Banners da Home → Banners*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].descricao
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    descricao: prismicT.KeyTextField;
    /**
     * Sub Descrição field in *Banners da Home → Banners*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].sub_descricao
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sub_descricao: prismicT.KeyTextField;
}
/**
 * Banners da Home document from Prismic
 *
 * - **API ID**: `banners_da_home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BannersDaHomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<BannersDaHomeDocumentData>, "banners_da_home", Lang>;
/** Content for blog documents */
interface BlogDocumentData {
    /**
     * Título field in *blog*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.titulo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    titulo: prismicT.RichTextField;
    /**
     * Descrição field in *blog*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.descricao
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    descricao: prismicT.RichTextField;
    /**
     * Conteúdo field in *blog*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.conteudo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    conteudo: prismicT.RichTextField;
    /**
     * Capa field in *blog*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.capa
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    capa: prismicT.ImageField<never>;
}
/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<BlogDocumentData>, "blog", Lang>;
/** Content for Post documents */
interface PostDocumentData {
    /**
     * Thumbnail field in *Post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * Resumo field in *Post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.resumo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    resumo: prismicT.KeyTextField;
    /**
     * Banner field in *Post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * Conteúdo field in *Post*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.conteudo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    conteudo: prismicT.RichTextField;
    /**
     * Categoria field in *Post*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: post.categoria
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    categoria: prismicT.SelectField<"Notícia" | "Utilidade" | "Natureza" | "População">;
}
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PostDocumentData>, "post", Lang>;
export type AllDocumentTypes = BannersDaHomeDocument | BlogDocument | PostDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BannersDaHomeDocumentData, BannersDaHomeDocumentDataBannersItem, BannersDaHomeDocument, BlogDocumentData, BlogDocument, PostDocumentData, PostDocument, AllDocumentTypes };
    }
}
