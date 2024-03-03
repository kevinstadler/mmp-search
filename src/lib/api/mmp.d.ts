/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/autor/": {
    get: operations["autor_list"];
  };
  "/api/autor/{id}/": {
    get: operations["autor_read"];
  };
  "/api/cones/": {
    get: operations["cones_list"];
  };
  "/api/cones/{id}/": {
    get: operations["cones_read"];
  };
  "/api/events/": {
    get: operations["events_list"];
  };
  "/api/events/{id}/": {
    get: operations["events_read"];
  };
  "/api/fuzzy-ort-geojson/": {
    get: operations["fuzzy-ort-geojson_list"];
  };
  "/api/fuzzy-ort-geojson/{id}/": {
    get: operations["fuzzy-ort-geojson_read"];
  };
  "/api/keyword/": {
    get: operations["keyword_list"];
  };
  "/api/keyword/{id}/": {
    get: operations["keyword_read"];
  };
  "/api/layers/": {
    get: operations["layers_list"];
  };
  "/api/layers/{id}/": {
    get: operations["layers_read"];
  };
  "/api/lines-and-points/": {
    get: operations["lines-and-points_list"];
  };
  "/api/lines-and-points/{id}/": {
    get: operations["lines-and-points_read"];
  };
  "/api/modeling-process/": {
    get: operations["modeling-process_list"];
  };
  "/api/modeling-process/{id}/": {
    get: operations["modeling-process_read"];
  };
  "/api/ort-geojson/": {
    get: operations["ort-geojson_list"];
  };
  "/api/ort-geojson/{id}/": {
    get: operations["ort-geojson_read"];
  };
  "/api/ort/": {
    get: operations["ort_list"];
  };
  "/api/ort/{id}/": {
    get: operations["ort_read"];
  };
  "/api/skoscollections/": {
    get: operations["skoscollections_list"];
  };
  "/api/skoscollections/{id}/": {
    get: operations["skoscollections_read"];
  };
  "/api/skosconcepts/": {
    get: operations["skosconcepts_list"];
  };
  "/api/skosconcepts/{id}/": {
    get: operations["skosconcepts_read"];
  };
  "/api/skosconceptschemes/": {
    get: operations["skosconceptschemes_list"];
  };
  "/api/skosconceptschemes/{id}/": {
    get: operations["skosconceptschemes_read"];
  };
  "/api/slides/": {
    get: operations["slides_list"];
  };
  "/api/slides/{id}/": {
    get: operations["slides_read"];
  };
  "/api/spatialcoverage/": {
    get: operations["spatialcoverage_list"];
  };
  "/api/spatialcoverage/{id}/": {
    get: operations["spatialcoverage_read"];
  };
  "/api/stelle/": {
    get: operations["stelle_list"];
  };
  "/api/stelle/{id}/": {
    get: operations["stelle_read"];
  };
  "/api/stopwords/": {
    get: operations["stopwords_list"];
  };
  "/api/stopwords/{id}/": {
    get: operations["stopwords_read"];
  };
  "/api/stories/": {
    get: operations["stories_list"];
  };
  "/api/stories/{id}/": {
    get: operations["stories_read"];
  };
  "/api/text-topic-relation/": {
    get: operations["text-topic-relation_list"];
  };
  "/api/text-topic-relation/{id}/": {
    get: operations["text-topic-relation_read"];
  };
  "/api/text/": {
    get: operations["text_list"];
  };
  "/api/text/{id}/": {
    get: operations["text_read"];
  };
  "/api/topics/": {
    get: operations["topics_list"];
  };
  "/api/topics/{id}/": {
    get: operations["topics_read"];
  };
  "/api/usecase/": {
    get: operations["usecase_list"];
  };
  "/api/usecase/{id}/": {
    get: operations["usecase_read"];
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  autor_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        id?: number;
        name?: string;
        gnd_id?: string;
        name_lat?: string;
        name_en?: string;
        name_fr?: string;
        name_it?: string;
        jahrhundert?: string;
        start_date?: string;
        end_date?: string;
        ort?: string;
        kommentar?: string;
        rvn_text_autor_autor__rvn_stelle_text_text__use_case?: string;
        ids?: string;
        has_usecase?: string;
        rvn_text_autor_autor__rvn_stelle_text_text__key_word?: string;
        rvn_text_autor_autor__rvn_stelle_text_text__key_word__art?: string;
        rvn_text_autor_autor?: string;
        rvn_text_autor_autor__art?: string;
        start_date_year?: string;
        end_date_year?: string;
        ordering?: string;
      };
    };
  };
  autor_read: {
    parameters: {
      query?: {
        id?: number;
        name?: string;
        gnd_id?: string;
        name_lat?: string;
        name_en?: string;
        name_fr?: string;
        name_it?: string;
        jahrhundert?: string;
        start_date?: string;
        end_date?: string;
        ort?: string;
        kommentar?: string;
        rvn_text_autor_autor__rvn_stelle_text_text__use_case?: string;
        ids?: string;
        has_usecase?: string;
        rvn_text_autor_autor__rvn_stelle_text_text__key_word?: string;
        rvn_text_autor_autor__rvn_stelle_text_text__key_word__art?: string;
        rvn_text_autor_autor?: string;
        rvn_text_autor_autor__art?: string;
        start_date_year?: string;
        end_date_year?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  cones_list: {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        id?: number;
        key_word?: string;
        stelle?: string;
        key_word_and?: string;
        stelle__key_word?: string;
        stelle__key_word_and?: string;
        stelle__key_word__art?: string;
        stelle__use_case?: string;
        stelle__has_usecase?: string;
        stelle__text__ort?: string;
        stelle__start_date?: string;
        stelle__end_date?: string;
        stelle__text__not_before?: string;
        stelle__text__not_after?: string;
        stelle__text__autor__start_date_year?: string;
        stelle__text__autor__end_date_year?: string;
        stelle__text__autor?: string;
        stelle__text__autor_and?: string;
        stelle__text__art?: string;
        ordering?: string;
      };
    };
  };
  cones_read: {
    parameters: {
      query?: {
        id?: number;
        key_word?: string;
        stelle?: string;
        key_word_and?: string;
        stelle__key_word?: string;
        stelle__key_word_and?: string;
        stelle__key_word__art?: string;
        stelle__use_case?: string;
        stelle__has_usecase?: string;
        stelle__text__ort?: string;
        stelle__start_date?: string;
        stelle__end_date?: string;
        stelle__text__not_before?: string;
        stelle__text__not_after?: string;
        stelle__text__autor__start_date_year?: string;
        stelle__text__autor__end_date_year?: string;
        stelle__text__autor?: string;
        stelle__text__autor_and?: string;
        stelle__text__art?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  events_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        title?: string;
        use_case?: string;
        description?: string;
        start_date?: string;
        end_date?: string;
        ordering?: string;
      };
    };
  };
  events_read: {
    parameters: {
      query?: {
        title?: string;
        use_case?: string;
        description?: string;
        start_date?: string;
        end_date?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  "fuzzy-ort-geojson_list": {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        id?: number;
        name?: string;
        norm_id?: string;
        name_antik?: string;
        name_de?: string;
        name_fr?: string;
        name_it?: string;
        long?: number;
        lat?: number;
        art?: string;
        kategorie?: string;
        kommentar?: string;
        ids?: string;
        rvn_autor_ort_ort?: string;
        rvn_text_ort_ort?: string;
        rvn_text_ort_ort__art?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__key_word?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__use_case?: string;
        rvn_text_ort_ort__rvn_stelle_text_text?: string;
        ordering?: string;
      };
    };
  };
  "fuzzy-ort-geojson_read": {
    parameters: {
      query?: {
        id?: number;
        name?: string;
        norm_id?: string;
        name_antik?: string;
        name_de?: string;
        name_fr?: string;
        name_it?: string;
        long?: number;
        lat?: number;
        art?: string;
        kategorie?: string;
        kommentar?: string;
        ids?: string;
        rvn_autor_ort_ort?: string;
        rvn_text_ort_ort?: string;
        rvn_text_ort_ort__art?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__key_word?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__use_case?: string;
        rvn_text_ort_ort__rvn_stelle_text_text?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  keyword_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        rvn_stelle_key_word_keyword__text__autor?: string;
        id?: number;
        stichwort?: string;
        art?: string;
        wurzel?: string;
        kommentar?: string;
        varianten?: string;
        rvn_stelle_key_word_keyword__text__not_before?: string;
        rvn_stelle_key_word_keyword__text__not_after?: string;
        ids?: string;
        has_usecase?: string;
        rvn_stelle_key_word_keyword?: string;
        rvn_stelle_key_word_keyword__text?: string;
        rvn_stelle_key_word_keyword__text__art?: string;
        rvn_stelle_key_word_keyword__text__autor__ort?: string;
        rvn_stelle_key_word_keyword__text__autor__start_date_year?: string;
        rvn_stelle_key_word_keyword__text__autor__end_date_year?: string;
        rvn_stelle_key_word_keyword__start_date?: string;
        rvn_stelle_key_word_keyword__end_date?: string;
        rvn_stelle_key_word_keyword__use_case?: string;
        ordering?: string;
      };
    };
  };
  keyword_read: {
    parameters: {
      query?: {
        rvn_stelle_key_word_keyword__text__autor?: string;
        id?: number;
        stichwort?: string;
        art?: string;
        wurzel?: string;
        kommentar?: string;
        varianten?: string;
        rvn_stelle_key_word_keyword__text__not_before?: string;
        rvn_stelle_key_word_keyword__text__not_after?: string;
        ids?: string;
        has_usecase?: string;
        rvn_stelle_key_word_keyword?: string;
        rvn_stelle_key_word_keyword__text?: string;
        rvn_stelle_key_word_keyword__text__art?: string;
        rvn_stelle_key_word_keyword__text__autor__ort?: string;
        rvn_stelle_key_word_keyword__text__autor__start_date_year?: string;
        rvn_stelle_key_word_keyword__text__autor__end_date_year?: string;
        rvn_stelle_key_word_keyword__start_date?: string;
        rvn_stelle_key_word_keyword__end_date?: string;
        rvn_stelle_key_word_keyword__use_case?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  layers_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        use_case?: string;
      };
    };
  };
  layers_read: {
    parameters: {
      query?: {
        use_case?: string;
      };
      path: {
        id: number;
      };
    };
  };
  "lines-and-points_list": {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        id?: number;
        key_word?: string;
        stelle?: string;
        key_word_and?: string;
        stelle__key_word?: string;
        stelle__key_word_and?: string;
        stelle__key_word__art?: string;
        stelle__use_case?: string;
        stelle__has_usecase?: string;
        stelle__text__ort?: string;
        stelle__start_date?: string;
        stelle__end_date?: string;
        stelle__text__not_before?: string;
        stelle__text__not_after?: string;
        stelle__text__autor__start_date_year?: string;
        stelle__text__autor__end_date_year?: string;
        stelle__text__autor?: string;
        stelle__text__autor_and?: string;
        stelle__text__art?: string;
        ordering?: string;
      };
    };
  };
  "lines-and-points_read": {
    parameters: {
      query?: {
        id?: number;
        key_word?: string;
        stelle?: string;
        key_word_and?: string;
        stelle__key_word?: string;
        stelle__key_word_and?: string;
        stelle__key_word__art?: string;
        stelle__use_case?: string;
        stelle__has_usecase?: string;
        stelle__text__ort?: string;
        stelle__start_date?: string;
        stelle__end_date?: string;
        stelle__text__not_before?: string;
        stelle__text__not_after?: string;
        stelle__text__autor__start_date_year?: string;
        stelle__text__autor__end_date_year?: string;
        stelle__text__autor?: string;
        stelle__text__autor_and?: string;
        stelle__text__art?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  "modeling-process_list": {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
      };
    };
  };
  "modeling-process_read": {
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "ort-geojson_list": {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        id?: number;
        name?: string;
        norm_id?: string;
        name_antik?: string;
        name_de?: string;
        name_fr?: string;
        name_it?: string;
        long?: number;
        lat?: number;
        art?: string;
        kategorie?: string;
        kommentar?: string;
        ids?: string;
        rvn_autor_ort_ort?: string;
        rvn_text_ort_ort?: string;
        rvn_text_ort_ort__art?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__key_word?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__use_case?: string;
        rvn_text_ort_ort__rvn_stelle_text_text?: string;
        ordering?: string;
      };
    };
  };
  "ort-geojson_read": {
    parameters: {
      query?: {
        id?: number;
        name?: string;
        norm_id?: string;
        name_antik?: string;
        name_de?: string;
        name_fr?: string;
        name_it?: string;
        long?: number;
        lat?: number;
        art?: string;
        kategorie?: string;
        kommentar?: string;
        ids?: string;
        rvn_autor_ort_ort?: string;
        rvn_text_ort_ort?: string;
        rvn_text_ort_ort__art?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__key_word?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__use_case?: string;
        rvn_text_ort_ort__rvn_stelle_text_text?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  ort_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        id?: number;
        name?: string;
        norm_id?: string;
        name_antik?: string;
        name_de?: string;
        name_fr?: string;
        name_it?: string;
        long?: number;
        lat?: number;
        art?: string;
        kategorie?: string;
        kommentar?: string;
        ids?: string;
        rvn_autor_ort_ort?: string;
        rvn_text_ort_ort?: string;
        rvn_text_ort_ort__art?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__key_word?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__use_case?: string;
        rvn_text_ort_ort__rvn_stelle_text_text?: string;
        ordering?: string;
      };
    };
  };
  ort_read: {
    parameters: {
      query?: {
        id?: number;
        name?: string;
        norm_id?: string;
        name_antik?: string;
        name_de?: string;
        name_fr?: string;
        name_it?: string;
        long?: number;
        lat?: number;
        art?: string;
        kategorie?: string;
        kommentar?: string;
        ids?: string;
        rvn_autor_ort_ort?: string;
        rvn_text_ort_ort?: string;
        rvn_text_ort_ort__art?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__key_word?: string;
        rvn_text_ort_ort__rvn_stelle_text_text__use_case?: string;
        rvn_text_ort_ort__rvn_stelle_text_text?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  skoscollections_list: {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        name?: string;
        label_lang?: string;
        scheme?: string;
        creator?: string;
        contributor?: string;
        legacy_id?: string;
        date_created?: string;
        date_modified?: string;
        created_by?: string;
        has_members__pref_label?: string;
        ordering?: string;
      };
    };
  };
  skoscollections_read: {
    parameters: {
      query?: {
        name?: string;
        label_lang?: string;
        scheme?: string;
        creator?: string;
        contributor?: string;
        legacy_id?: string;
        date_created?: string;
        date_modified?: string;
        created_by?: string;
        has_members__pref_label?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  skosconcepts_list: {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        id?: number;
        pref_label?: string;
        pref_label_string?: string;
        scheme?: string;
        collection?: string;
        broader_concept?: string;
        ordering?: string;
      };
    };
  };
  skosconcepts_read: {
    parameters: {
      query?: {
        id?: number;
        pref_label?: string;
        pref_label_string?: string;
        scheme?: string;
        collection?: string;
        broader_concept?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  skosconceptschemes_list: {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        title?: string;
        title_lang?: string;
        identifier?: string;
        creator?: string;
        contributor?: string;
        language?: string;
        subject?: string;
        version?: string;
        publisher?: string;
        license?: string;
        owner?: string;
        relation?: string;
        coverage?: string;
        legacy_id?: string;
        date_created?: string;
        date_modified?: string;
        date_issued?: string;
        created_by?: string;
        curator?: string;
        ordering?: string;
      };
    };
  };
  skosconceptschemes_read: {
    parameters: {
      query?: {
        title?: string;
        title_lang?: string;
        identifier?: string;
        creator?: string;
        contributor?: string;
        language?: string;
        subject?: string;
        version?: string;
        publisher?: string;
        license?: string;
        owner?: string;
        relation?: string;
        coverage?: string;
        legacy_id?: string;
        date_created?: string;
        date_modified?: string;
        date_issued?: string;
        created_by?: string;
        curator?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  slides_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        ordering?: string;
      };
    };
  };
  slides_read: {
    parameters: {
      query?: {
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  spatialcoverage_list: {
    parameters: {
      query?: {
        page?: number;
        page_size?: number;
        id?: number;
        key_word?: string;
        stelle?: string;
        key_word_and?: string;
        stelle__key_word?: string;
        stelle__key_word_and?: string;
        stelle__key_word__art?: string;
        stelle__use_case?: string;
        stelle__has_usecase?: string;
        stelle__text__ort?: string;
        stelle__start_date?: string;
        stelle__end_date?: string;
        stelle__text__not_before?: string;
        stelle__text__not_after?: string;
        stelle__text__autor__start_date_year?: string;
        stelle__text__autor__end_date_year?: string;
        stelle__text__autor?: string;
        stelle__text__autor_and?: string;
        stelle__text__art?: string;
        ordering?: string;
      };
    };
  };
  spatialcoverage_read: {
    parameters: {
      query?: {
        id?: number;
        key_word?: string;
        stelle?: string;
        key_word_and?: string;
        stelle__key_word?: string;
        stelle__key_word_and?: string;
        stelle__key_word__art?: string;
        stelle__use_case?: string;
        stelle__has_usecase?: string;
        stelle__text__ort?: string;
        stelle__start_date?: string;
        stelle__end_date?: string;
        stelle__text__not_before?: string;
        stelle__text__not_after?: string;
        stelle__text__autor__start_date_year?: string;
        stelle__text__autor__end_date_year?: string;
        stelle__text__autor?: string;
        stelle__text__autor_and?: string;
        stelle__text__art?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  stelle_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        id?: number;
        text?: string;
        summary?: string;
        zitat?: string;
        translation?: string;
        key_word?: string;
        kommentar?: string;
        use_case?: string;
        ids?: string;
        has_usecase?: string;
        text__autor_and?: string;
        text__autor?: string;
        text__ort_and?: string;
        text__ort?: string;
        text__art?: string;
        key_word__art?: string;
        key_word_and?: string;
        start_date?: string;
        end_date?: string;
        text__start_date?: string;
        text__end_date?: string;
        text__autor__start_date_year?: string;
        text__autor__end_date_year?: string;
        ordering?: string;
      };
    };
  };
  stelle_read: {
    parameters: {
      query?: {
        id?: number;
        text?: string;
        summary?: string;
        zitat?: string;
        translation?: string;
        key_word?: string;
        kommentar?: string;
        use_case?: string;
        ids?: string;
        has_usecase?: string;
        text__autor_and?: string;
        text__autor?: string;
        text__ort_and?: string;
        text__ort?: string;
        text__art?: string;
        key_word__art?: string;
        key_word_and?: string;
        start_date?: string;
        end_date?: string;
        text__start_date?: string;
        text__end_date?: string;
        text__autor__start_date_year?: string;
        text__autor__end_date_year?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  stopwords_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
      };
    };
  };
  stopwords_read: {
    parameters: {
      path: {
        id: number;
      };
    };
  };
  stories_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        ordering?: string;
      };
    };
  };
  stories_read: {
    parameters: {
      query?: {
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  "text-topic-relation_list": {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        ids?: string;
        text?: string;
        topic?: string;
        weight?: string;
      };
    };
  };
  "text-topic-relation_read": {
    parameters: {
      query?: {
        ids?: string;
        text?: string;
        topic?: string;
        weight?: string;
      };
      path: {
        id: number;
      };
    };
  };
  text_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        id?: number;
        autor?: string;
        title?: string;
        jahrhundert?: string;
        start_date?: string;
        end_date?: string;
        edition?: string;
        art?: string;
        ort?: string;
        kommentar?: string;
        rvn_stelle_text_text__use_case?: string;
        ids?: string;
        has_usecase?: string;
        autor__start_date_year?: string;
        autor__end_date_year?: string;
        not_before?: string;
        not_after?: string;
        rvn_stelle_text_text__key_word?: string;
        rvn_stelle_text_text__key_word__art?: string;
        ordering?: string;
      };
    };
  };
  text_read: {
    parameters: {
      query?: {
        id?: number;
        autor?: string;
        title?: string;
        jahrhundert?: string;
        start_date?: string;
        end_date?: string;
        edition?: string;
        art?: string;
        ort?: string;
        kommentar?: string;
        rvn_stelle_text_text__use_case?: string;
        ids?: string;
        has_usecase?: string;
        autor__start_date_year?: string;
        autor__end_date_year?: string;
        not_before?: string;
        not_after?: string;
        rvn_stelle_text_text__key_word?: string;
        rvn_stelle_text_text__key_word__art?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
  topics_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
      };
    };
  };
  topics_read: {
    parameters: {
      path: {
        id: number;
      };
    };
  };
  usecase_list: {
    parameters: {
      query?: {
        limit?: number;
        offset?: number;
        id?: number;
        show_labels?: string;
        layer?: string;
        published?: string;
        ids?: string;
        title?: string;
        principal_investigator?: string;
        pi_norm_id?: string;
        description?: string;
        has_stelle__text?: string;
        has_stelle__text__autor?: string;
        has_stelle__text__art?: string;
        has_stelle__key_word?: string;
        ordering?: string;
      };
    };
  };
  usecase_read: {
    parameters: {
      query?: {
        id?: number;
        show_labels?: string;
        layer?: string;
        published?: string;
        ids?: string;
        title?: string;
        principal_investigator?: string;
        pi_norm_id?: string;
        description?: string;
        has_stelle__text?: string;
        has_stelle__text__autor?: string;
        has_stelle__text__art?: string;
        has_stelle__key_word?: string;
        ordering?: string;
      };
      path: {
        id: number;
      };
    };
  };
}
